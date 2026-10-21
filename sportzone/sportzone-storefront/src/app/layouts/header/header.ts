import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Dữ liệu giả - sau này lấy từ giỏ hàng thật
  wishCount = 4;
  cartCount = 3;
  cartTotal = '1.250.000đ';

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