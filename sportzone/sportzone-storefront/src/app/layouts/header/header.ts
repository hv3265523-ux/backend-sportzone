import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cart = inject(CartService);

  wishCount = 4;

  get cartCount(): number {
    return this.cart.count();
  }

  get cartTotal(): string {
    return this.cart.total().toLocaleString('vi-VN') + 'đ';
  }

  // Mỗi mục có kèm đường dẫn. Sau này có trang lọc theo danh mục thì đổi link.
  menu = [
    { label: 'Tất cả sản phẩm', link: '/san-pham' },
    { label: 'Bóng đá', link: '/san-pham' },
    { label: 'Bóng rổ', link: '/san-pham' },
    { label: 'Chạy bộ', link: '/san-pham' },
    { label: 'Quần áo thể thao', link: '/san-pham' },
    { label: 'Giày dép', link: '/san-pham' },
    { label: 'Phụ kiện tập luyện', link: '/san-pham' },
  ];
}