import { Routes } from '@angular/router';
import { StorefrontLayout } from './layouts/storefront-layout/storefront-layout';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: StorefrontLayout,
    children: [{ path: '', component: Home }],
  },
];