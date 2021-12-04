import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SystemComponent} from './system.component';

const routes: Routes = [
  {
    path: '',
    component: SystemComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
      },
      {
        path: 'wallet',
        loadChildren: () =>
          import('./pages/wallet/wallet.module').then(
            (m) => m.WalletModule
          ),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'categories',
        loadChildren: () =>
          import('./pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'teams',
        loadChildren: () =>
          import('./pages/teams/teams.module').then(
            (m) => m.TeamsModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.module').then(
            (m) => m.ProfileModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./pages/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },
      {
        path: 'integrations',
        loadChildren: () =>
          import('./pages/integrations/integrations.module').then(
            (m) => m.IntegrationsModule
          ),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class SystemRoutingModule {
}
