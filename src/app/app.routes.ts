import { Routes } from '@angular/router';
import { LanguageGuard } from './language.guard';

const languageChildren: Routes = [
  {
    path: '',
    loadComponent: () => import('./cv/cv').then((c) => c.Cv),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [LanguageGuard],
    children: languageChildren,
  },
  {
    path: '**',
    redirectTo: 'en',
  },
];
