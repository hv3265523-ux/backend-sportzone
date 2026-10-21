import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  support = [
    'Chính sách bảo hành & đổi trả 30 ngày',
    'Hướng dẫn chọn size chuẩn xác',
    'Chính sách giao hàng siêu tốc',
    'Câu hỏi thường gặp (FAQ)',
    'Phương thức thanh toán tiện lợi',
    'Bảo mật thông tin khách hàng',
  ];

  services = [
    'In áo đấu & ép số theo yêu cầu',
    'Đặt may đồng phục đội bóng thể thao',
    'Chương trình Thẻ thành viên VIP',
    'Tra cứu đơn hàng trực tuyến',
    'Hợp tác doanh nghiệp / B2B',
  ];

   payments = [
    { name: 'VNPAY', color: 'text-blue-700' },
    { name: 'MoMo', color: 'text-pink-700' },
    { name: 'VISA/MASTER', color: 'text-blue-800' },
    { name: 'COD', color: 'text-gray-700' },
  ];
} 