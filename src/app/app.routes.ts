import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'en',
    loadComponent: () => import('./cv/cv').then((c) => c.Cv),
  },
  {
    path: 'ro',
    loadComponent: () => import('./cv/cv').then((c) => c.Cv),
  },
  {
    path: '**',
    redirectTo: 'en',
  },
];
