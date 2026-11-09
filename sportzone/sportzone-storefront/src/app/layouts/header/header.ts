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

  menu = [
    'Tất cả sản phẩm',
    'Bóng đá',
    'Bóng rổ',
    'Chạy bộ',
    'Quần áo thể thao',
    'Giày dép',
    'Phụ kiện tập luyện',
  ];
}