import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {AuthService} from "../../../../../core/services/auth.service";

export interface Section {
  title: string;
  subtitle: string | number | Date;
  icon: string;
  routerLink: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  @Input() drawer: MatDrawer;

  general: Section[] = [
    {
      title: 'NAV_SIDE.WALLET',
      subtitle: '$0',
      icon: 'account_balance_wallet',
      routerLink: '/system/wallet'
    },
    {
      title: 'NAV_SIDE.DASHBOARD',
      subtitle: '',
      icon: 'dashboard',
      routerLink: '/system/dashboard',
    },
    {
      title: 'NAV_SIDE.CATEGORIES',
      subtitle: '',
      icon: 'category',
      routerLink: '/system/categories'
    },
    {
      title: 'NAV_SIDE.TEAMS',
      subtitle: '',
      icon: 'groups',
      routerLink: '/system/teams'
    },
  ];

  others: Section[] = [
    {
      title: 'NAV_SIDE.PROFILE',
      subtitle: '',
      icon: 'account_circle',
      routerLink: '/system/profile'
    },
    {
      title: 'NAV_SIDE.SETTINGS',
      subtitle: '',
      icon: 'settings',
      routerLink: '/system/settings'
    },
    {
      title: 'NAV_SIDE.INTEGRATIONS',
      subtitle: '',
      icon: 'integration_instructions',
      routerLink: '/system/integrations'
    }
  ];

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }
}
