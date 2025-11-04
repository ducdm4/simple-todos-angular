import { Routes } from '@angular/router';
import { CreateItem } from './features/create';
import { Home } from './features/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'create',
    component: CreateItem,
  },
];
