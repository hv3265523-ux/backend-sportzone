import { Routes } from '@angular/router';
import { StorefrontLayout } from './layouts/storefront-layout/storefront-layout';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { CategoryPage } from './pages/category-page/category-page';
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

      // 3 trang danh mục (dùng chung 1 component)
      { path: 'bong-da', component: CategoryPage, data: { slug: 'bong-da' } },
      { path: 'bong-ro', component: CategoryPage, data: { slug: 'bong-ro' } },
      { path: 'chay-bo', component: CategoryPage, data: { slug: 'chay-bo' } },
    ],
  },
  { path: '**', redirectTo: '' },
];