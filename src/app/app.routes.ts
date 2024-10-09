import { Routes } from '@angular/router';
import {PreferencesFormComponent} from './pages/preferences-form/preferences-form.component';

export const routes: Routes = [
  {
    path: '',
    component: PreferencesFormComponent,
    pathMatch: 'full'
  },

  {
    path: 'app-preferences-form',
    loadChildren: () => import('./pages/preferences-form/preferences-form.component').then(m => m.PreferencesFormComponent)
  },
];
