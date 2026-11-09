import { Routes } from '@angular/router';
import { StorefrontLayout } from './layouts/storefront-layout/storefront-layout';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
// import { TenClassTatCaSanPham } from './pages/ten-thu-muc/ten-file';   // sửa cho đúng rồi bỏ //
// import { TenClassGioHang } from './pages/ten-thu-muc/ten-file';        // sửa cho đúng rồi bỏ //

export const routes: Routes = [
  {
    path: '',
    component: StorefrontLayout,
    children: [
      { path: '', component: Home },
      // { path: 'san-pham', component: TenClassTatCaSanPham },   // bỏ // sau khi sửa tên
      { path: 'san-pham/:id', component: ProductDetail },
      // { path: 'gio-hang', component: TenClassGioHang },        // bỏ // sau khi sửa tên
      { path: 'account', component: AccountComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'don-hang', component: OrdersComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];