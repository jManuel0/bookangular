import { Routes } from '@angular/router';
import { Home } from './pages/Home/home';

import { Labs } from './pages/Labs/labs'
export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'inicio',
    component: Home
  },
  {
    path: 'labs',
    component: Labs
  }
];

