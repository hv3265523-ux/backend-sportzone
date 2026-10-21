import { Routes } from '@angular/router';
import { StorefrontLayout } from './layouts/storefront-layout/storefront-layout';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  {
    path: '',
    component: StorefrontLayout,
    children: [
      { path: '', component: Home },
      { path: 'san-pham/:id', component: ProductDetail },
    ],
  },
  { path: '**', redirectTo: '' },
];