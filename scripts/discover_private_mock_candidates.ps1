param(
  [string]$SourceRoot = 'C:\Users\Z4 G4\Documents\CFA',
  [string]$OutputRoot = '.local-research\mock-exams\library-rescan'
)

$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Runtime.WindowsRuntime
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Data.Pdf.PdfPageRenderOptions, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null
$genericAsTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } | Select-Object -First 1
$actionAsTask = [System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { $_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 } | Select-Object -First 1
function Wait-Result($operation,[Type]$type){$task=$genericAsTask.MakeGenericMethod($type).Invoke($null,@($operation));$task.Wait();$task.Result}
function Wait-Action($operation){$task=$actionAsTask.Invoke($null,@($operation));$task.Wait()}

$output = New-Item -ItemType Directory -Force -Path $OutputRoot
$textOutput = New-Item -ItemType Directory -Force -Path (Join-Path $output.FullName 'first-pages')
$tesseract = 'C:\Program Files\Tesseract-OCR\tesseract.exe'
$files = Get-ChildItem -LiteralPath $SourceRoot -File -Recurse -Force -ErrorAction SilentlyContinue | Sort-Object FullName
$directories = Get-ChildItem -LiteralPath $SourceRoot -Directory -Recurse -Force -ErrorAction SilentlyContinue | Sort-Object FullName
$records = @()

foreach($file in $files){
  $record = [ordered]@{path=$file.FullName;folder=$file.DirectoryName;filename=$file.Name;extension=$file.Extension.ToLowerInvariant();bytes=$file.Length;pages=$null;pdfTitle=$null;pdfAuthor=$null;pdfSubject=$null;firstPageText=$null;candidate=$false;candidateSignals=@()}
  if($file.Extension -ieq '.pdf'){
    $stream=[IO.File]::OpenRead($file.FullName);$metadataBytes=New-Object byte[] ([Math]::Min(1048576,$stream.Length));$read=$stream.Read($metadataBytes,0,$metadataBytes.Length);$stream.Dispose();$raw=[Text.Encoding]::GetEncoding(28591).GetString($metadataBytes,0,$read)
    foreach($field in 'Title','Author','Subject'){$match=[regex]::Match($raw,"/$field\s*\(([^)]{1,500})\)",[Text.RegularExpressions.RegexOptions]::IgnoreCase);if($match.Success){$record["pdf$field"]=$match.Groups[1].Value}}
    try{
      $storage=Wait-Result ([Windows.Storage.StorageFile]::GetFileFromPathAsync($file.FullName)) ([Windows.Storage.StorageFile])
      $pdf=Wait-Result ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($storage)) ([Windows.Data.Pdf.PdfDocument])
      $record.pages=[int]$pdf.PageCount
      if($pdf.PageCount -gt 0){
        $sha=[Security.Cryptography.SHA256]::Create();$key=([BitConverter]::ToString($sha.ComputeHash([Text.Encoding]::UTF8.GetBytes($file.FullName))).Replace('-','')).Substring(0,16);$sha.Dispose()
        $textPath=Join-Path $textOutput.FullName "$key.txt"
        if(-not(Test-Path -LiteralPath $textPath)){
          $imagePath=Join-Path $textOutput.FullName "$key.png";$page=$pdf.GetPage(0);$stream=New-Object Windows.Storage.Streams.InMemoryRandomAccessStream;$options=New-Object Windows.Data.Pdf.PdfPageRenderOptions;$options.DestinationWidth=1200
          Wait-Action ($page.RenderToStreamAsync($stream,$options));$reader=New-Object Windows.Storage.Streams.DataReader($stream.GetInputStreamAt(0));$count=Wait-Result ($reader.LoadAsync([uint32]$stream.Size)) ([uint32]);$bytes=New-Object byte[] $count;$reader.ReadBytes($bytes);[IO.File]::WriteAllBytes($imagePath,$bytes);$reader.Dispose();$stream.Dispose();$page.Dispose()
          $previous=$ErrorActionPreference;$ErrorActionPreference='Continue';& $tesseract $imagePath ($textPath -replace '\.txt$','') -l eng 2>$null;$exit=$LASTEXITCODE;$ErrorActionPreference=$previous;Remove-Item -LiteralPath $imagePath;if($exit -ne 0){throw 'OCR failure'}
        }
        $record.firstPageText=Get-Content -Raw -LiteralPath $textPath
      }
    }catch{$record.firstPageText="[inspection error: $($_.Exception.Message)]"}
  }
  $search=($record.path,$record.pdfTitle,$record.pdfAuthor,$record.pdfSubject,$record.firstPageText -join "`n")
  if($search -match '(?i)2026'){$record.candidateSignals+='2026'}
  if($search -match '(?i)mock'){$record.candidateSignals+='mock'}
  if($search -match '(?i)practice|question.?bank|topicwise questions'){$record.candidateSignals+='practice'}
  if($search -match '(?i)answer|solution'){$record.candidateSignals+='answer-or-solution'}
  if($search -match '(?i)level\s*(i|1)'){$record.candidateSignals+='level-i'}
  $record.candidate=($record.candidateSignals -contains '2026') -and (($record.candidateSignals -contains 'mock') -or ($record.candidateSignals -contains 'practice'))
  $records += [pscustomobject]$record
}

[ordered]@{scannedAt=(Get-Date).ToUniversalTime().ToString('o');root=$SourceRoot;directoryCount=$directories.Count;fileCount=$files.Count;pdfCount=($files|Where-Object Extension -ieq '.pdf').Count;directories=@($directories.FullName);files=$records;candidates=@($records|Where-Object candidate)} | ConvertTo-Json -Depth 8 | Set-Content -Encoding UTF8 -LiteralPath (Join-Path $output.FullName 'complete-scan.json')
Write-Host "Scanned $($directories.Count) directories, $($files.Count) files, and $(($files|Where-Object Extension -ieq '.pdf').Count) PDFs. Candidates: $(($records|Where-Object candidate).Count)."
