import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Dữ liệu giả - sau này thay bằng API của Phúc
  tabs = ['Tất Cả', 'Giày Chạy Bộ', 'Giày Bóng Đá', 'Áo Bóng Đá', 'Phụ Kiện'];
  activeTab = 'Tất Cả';

  benefits = [
    { icon: '🚚', color: 'bg-blue-100', title: 'Miễn Phí Giao Hàng', desc: 'Cho đơn hàng toàn quốc từ 500k' },
    { icon: '🔄', color: 'bg-blue-100', title: 'Đổi Size 30 Ngày Tận Nơi', desc: 'Shipper tới đổi trả trực tiếp tại nhà' },
    { icon: '✅', color: 'bg-orange-100', title: '100% Chính Hãng', desc: 'Cam kết bồi hoàn 200% nếu hàng giả' },
    { icon: '🖨️', color: 'bg-indigo-100', title: 'In Tên Số Lấy Sau 2 Giờ', desc: 'Công nghệ ép nhiệt chuẩn Ngoại Hạng Anh' },
  ];

  sports = [
    { name: 'Bóng Đá', count: '1.200+ sản phẩm', bg: 'from-green-800 to-gray-900' },
    { name: 'Bóng Rổ', count: '800+ sản phẩm', bg: 'from-orange-700 to-gray-900' },
    { name: 'Chạy Bộ', count: '950+ sản phẩm', bg: 'from-blue-800 to-gray-900' },
    { name: 'Gym & Fitness', count: '700+ sản phẩm', bg: 'from-gray-600 to-gray-900' },
    { name: 'Pickleball', count: '300+ sản phẩm', bg: 'from-teal-700 to-gray-900' },
  ];

  brands = ['NIKE', 'ADIDAS', 'PUMA', 'UNDER ARMOUR', 'MIZUNO', 'ASICS', 'YONEX', 'LI-NING'];

  flashSale = [
    { discount: '-36%', brand: 'NIKE', name: 'Giày Chạy Bộ Nike Zoomx Vaporfly 3 Carbon', price: '4.690.000đ', oldPrice: '7.290.000đ', sizes: ['40', '41', '42', '43'] },
    { discount: '-40%', brand: 'ADIDAS', name: 'Áo Đấu Real Madrid Home Adidas', price: '1.490.000đ', oldPrice: '2.490.000đ', sizes: ['S', 'M', 'L', 'XL'] },
    { discount: '-50%', brand: 'ADIDAS', name: 'Giày Đá Bóng Sân Cỏ Nhân Tạo Adidas Predator', price: '2.790.000đ', oldPrice: '5.590.000đ', sizes: ['40', '41', '42', '43'] },
    { discount: '-42%', brand: 'NIKE', name: 'Giày Đá Bóng Nike Phantom Infinity', price: '2.150.000đ', oldPrice: '3.700.000đ', sizes: ['40', '41', '42', '43'] },
  ];

  featured = [
    { tag: 'Mới', brand: 'ADIDAS', name: 'Áo Đấu Real Madrid Home 25/26', price: '1.350.000đ', bg: 'bg-gray-100' },
    { tag: 'Hot', brand: 'ASICS', name: 'Giày Chạy Bộ Asics Gel-Kayano 31', price: '3.990.000đ', bg: 'bg-blue-50' },
    { tag: 'Mới', brand: 'PUMA', name: 'Giày Đá Bóng Puma Future 7 Pro', price: '2.690.000đ', bg: 'bg-lime-50' },
    { tag: 'Bán chạy', brand: 'UNDER ARMOUR', name: 'Áo Nén Giữ Nhiệt UA HeatGear', price: '850.000đ', bg: 'bg-gray-100' },
    { tag: 'Hot', brand: 'PUMA', name: 'Áo Đấu Manchester City Home', price: '1.420.000đ', bg: 'bg-sky-50' },
    { tag: 'Mới', brand: 'WILSON', name: 'Bóng Rổ Wilson NBA Authentic', price: '990.000đ', bg: 'bg-orange-50' },
    { tag: 'Bán chạy', brand: 'HOKA', name: 'Giày Chạy Bộ Hoka Clifton 9', price: '3.200.000đ', bg: 'bg-blue-50' },
    { tag: 'Mới', brand: 'UNDER ARMOUR', name: 'Balo Thể Thao Training', price: '690.000đ', bg: 'bg-gray-100' },
  ];

  checks = [
    'In tên, số theo mẫu các CLB hàng đầu châu Âu',
    'Chất liệu in bền màu, không bong tróc',
    'Hoàn thiện trong 24h cho đơn lẻ',
  ];

  reviews = [
    {
      name: 'Lê Trần Hoàng',
      role: 'Finisher VnExpress Marathon Huế 2024',
      avatar: '/images/avatar-1.jpg',
      text: 'Đôi Vaporfly 3 mua tại SportZone hỗ trợ mình lập PR Sub 3:30 tại giải chạy VnExpress Marathon Huế. Đệm nảy khủng khiếp, hàng chính hãng check mã QR chuẩn chỉ. Giao hàng hoả tốc trong ngày!',
    },
    {
      name: 'Nguyễn Văn Đạt',
      role: 'Đội Trưởng FC FPT Software',
      avatar: '/images/avatar-2.jpg',
      text: 'Đặt in 18 bộ áo Real Madrid cho cả đội bóng công ty. Chất vải HEAT.RDY mát rượi, font số C1 in sắc nét từng góc cạnh không lem một tí nào. Sẽ tiếp tục ủng hộ SportZone mùa giải tới.',
    },
    {
      name: 'Phạm Minh Quân',
      role: 'Hà Nội • Khách hàng thân thiết VIP',
      avatar: '/images/avatar-3.jpg',
      text: 'Dùng công cụ đo size chân online của shop ban đầu hơi lo không vừa, ai ngờ lúc nhận đôi Predator mang ôm khít chân hoàn hảo, đá không hề bị cấn ngón hay tuột gót. Dịch vụ quá xuất sắc!',
    },
  ];

  gallery = [
    '/images/gallery-1.jpg', // chạy bộ buộc dây giày
    '/images/gallery-2.jpg', // bóng rổ
    '/images/gallery-3.jpg', // bóng đá
    '/images/gallery-4.jpg', // gym
    '/images/gallery-5.jpg', // marathon về đích
    '/images/gallery-6.jpg', // áo đấu số 8
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}