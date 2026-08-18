import {fireEvent,render,screen} from '@testing-library/react';
import {describe,expect,it} from 'vitest';
import {OrganizationalFormComparator,organizationalProfiles} from './OrganizationalFormComparator';
import {PublicPrivateTransitionMap,transitionProfiles} from './PublicPrivateTransitionMap';

describe('Corporate Issuers LM1 tools',()=>{
 it('compares forms using deterministic curriculum-supported profiles',()=>{render(<OrganizationalFormComparator/>);expect(screen.getByText('Direct owner control')).toBeInTheDocument();expect(screen.getByText('Shareholders generally limited to investment')).toBeInTheDocument();fireEvent.change(screen.getByLabelText('First organizational form'),{target:{value:'limited-partnership'}});expect(screen.getByText('General partner operates; limited partners passive')).toBeInTheDocument();expect(organizationalProfiles['limited-partnership'].capitalAccess).toContain('passive investor')});
 it('maps both ownership-transition directions and their trade-offs',()=>{render(<PublicPrivateTransitionMap/>);expect(screen.getByText('Broader capital access')).toBeInTheDocument();fireEvent.change(screen.getByLabelText('Ownership transition'),{target:{value:'public-to-private'}});expect(screen.getByText('Lower share liquidity')).toBeInTheDocument();expect(screen.getByText('Shares are delisted')).toBeInTheDocument();expect(transitionProfiles['public-to-private'].sequence).toHaveLength(4)});
});
