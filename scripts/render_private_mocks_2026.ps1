param(
  [string]$SourceRoot = 'C:\Users\Z4 G4\Documents\CFA\Mocks\Mocks (2026)',
  [string]$OutputRoot = '.local-research\mock-exams\ocr-2026-hi',
  [uint32]$RenderWidth = 1800
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null

$genericAsTask = [System.WindowsRuntimeSystemExtensions].GetMethods() |
  Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
  Select-Object -First 1
$actionAsTask = [System.WindowsRuntimeSystemExtensions].GetMethods() |
  Where-Object { $_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } |
  Select-Object -First 1

function Wait-WinRtResult($Operation, [Type]$ResultType) {
  $task = $genericAsTask.MakeGenericMethod($ResultType).Invoke($null, @($Operation))
  $task.Wait()
  return $task.Result
}

function Wait-WinRtAction($Operation) {
  $task = $actionAsTask.Invoke($null, @($Operation))
  $task.Wait()
}

$resolvedOutput = New-Item -ItemType Directory -Force -Path $OutputRoot
$tesseract = 'C:\Program Files\Tesseract-OCR\tesseract.exe'
if (-not (Test-Path -LiteralPath $tesseract)) { throw 'Local Tesseract installation not found.' }

foreach ($pdfPath in Get-ChildItem -LiteralPath $SourceRoot -Filter 'Mock *.pdf' | Sort-Object Name) {
  $mockNumber = [int]([regex]::Match($pdfPath.BaseName, '\d+').Value)
  $mockOutput = New-Item -ItemType Directory -Force -Path (Join-Path $resolvedOutput.FullName "mock-$mockNumber")
  $storageFile = Wait-WinRtResult ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath.FullName)) ([Windows.Storage.StorageFile])
  $document = Wait-WinRtResult ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storageFile)) ([Windows.Data.Pdf.PdfDocument])

  for ($pageIndex = 0; $pageIndex -lt $document.PageCount; $pageIndex++) {
    $pageNumber = $pageIndex + 1
    $textPath = Join-Path $mockOutput.FullName ("page-{0:d3}.txt" -f $pageNumber)
    if (Test-Path -LiteralPath $textPath) { continue }
    $imagePath = Join-Path $mockOutput.FullName ("page-{0:d3}.png" -f $pageNumber)
    $page = $document.GetPage($pageIndex)
    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    $renderOptions = New-Object Windows.Data.Pdf.PdfPageRenderOptions
    $renderOptions.DestinationWidth = $RenderWidth
    Wait-WinRtAction ($page.RenderToStreamAsync($stream, $renderOptions))
    $reader = New-Object Windows.Storage.Streams.DataReader($stream.GetInputStreamAt(0))
    $byteCount = Wait-WinRtResult ($reader.LoadAsync([uint32]$stream.Size)) ([uint32])
    $bytes = New-Object byte[] $byteCount
    $reader.ReadBytes($bytes)
    [IO.File]::WriteAllBytes($imagePath, $bytes)
    $reader.Dispose(); $stream.Dispose(); $page.Dispose()
    $previousPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    & $tesseract $imagePath ($textPath -replace '\.txt$', '') -l eng 2>$null
    $ocrExitCode = $LASTEXITCODE
    $ErrorActionPreference = $previousPreference
    if ($ocrExitCode -ne 0) { throw "OCR failed for $($pdfPath.Name), page $pageNumber." }
    Remove-Item -LiteralPath $imagePath
  }
  Write-Host "OCR complete: $($pdfPath.Name) ($($document.PageCount) pages)"
}
