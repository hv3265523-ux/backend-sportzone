import { Component, OnInit, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  // 3 ảnh banner, dán link ảnh của bạn vào
  banners = [
  '/images/banner-1.png',
  '/images/banner-2.png',
  '/images/banner-3.png',
];
  currentBanner = signal(0);
  private timer: any;

  ngOnInit() {
    // 4000 = 4 giây đổi ảnh một lần
    this.timer = setInterval(() => {
      this.currentBanner.update((i) => (i + 1) % this.banners.length);
    }, 4000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

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
    { name: 'Bóng Đá', count: '1.200+ sản phẩm', img: 'https://pbs.twimg.com/media/DfE3vQbXUAIU9ar.jpg' },
    { name: 'Bóng Rổ', count: '800+ sản phẩm', img: 'https://tse4.mm.bing.net/th/id/OIP.6Bdhqbc6tOl329hAosNwHAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Chạy Bộ', count: '950+ sản phẩm', img: 'https://media.istockphoto.com/id/1324624694/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-t%E1%BA%ADp-th%E1%BB%83-d%E1%BB%A5c-ch%E1%BA%A1y-marathon-tr%C3%AAn-%C4%91%C6%B0%E1%BB%9Dng-m%C3%B2n-b%E1%BB%9D-bi%E1%BB%83n-%C4%91%E1%BA%A7y-n%E1%BA%AFng.jpg?s=612x612&w=0&k=20&c=ibhTVzyWkLFQKZoa4JPE0uugydkLioBy1RCocyewLQo=' },
    { name: 'Gym & Fitness', count: '700+ sản phẩm', img: 'https://th.bing.com/th/id/OIP.mAAq0z6vwJiMdChx7xFuigHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Pickleball', count: '300+ sản phẩm', img: 'https://images2.thanhnien.vn/528068263637045248/2025/9/7/z69860154834122639d02212c0f61214b2269e8e622c1f-17572415676581001975238.jpg' },
  ];

  brands = ['NIKE', 'ADIDAS', 'PUMA', 'UNDER ARMOUR', 'MIZUNO', 'ASICS', 'YONEX', 'LI-NING'];

  flashSale = [
    { img: 'https://down-vn.img.susercontent.com/file/sg-11134201-7rd6h-lw9qngo4r70b23', discount: '-36%', brand: 'NIKE', name: 'Giày Chạy Bộ Nike Zoomx Vaporfly 3 Carbon', price: '4.690.000đ', oldPrice: '7.290.000đ', sizes: ['40', '41', '42', '43'] },
    { img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5b9g7DHD4yv5ul6bIpaR-weCR-aPImNHS-1s3o3tR7vtKrcpPUA74qm3T7V-8A8bR79CvaBg89xbKd3LSohMFmFwHaW1ceur9URxPBHZKq4wDZBlYwqGIZf0Puij1CQRgtrzRSfH0rxRmdH-bv5eDsaShXkp886CaPNnbd5ys6sfrXQ5yvfOnOfkqm_I/s1600/real-madrid-24-25-kit-16.jpg', discount: '-40%', brand: 'ADIDAS', name: 'Áo Đấu Real Madrid Home Adidas', price: '1.490.000đ', oldPrice: '2.490.000đ', sizes: ['S', 'M', 'L', 'XL'] },
    { img: 'https://tse4.mm.bing.net/th/id/OIP.8E0MIDG4heB5-TgZQgaE4gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', discount: '-50%', brand: 'ADIDAS', name: 'Giày Đá Bóng Sân Cỏ Nhân Tạo Adidas Predator', price: '2.790.000đ', oldPrice: '5.590.000đ', sizes: ['40', '41', '42', '43'] },
    { img: 'https://tse2.mm.bing.net/th/id/OIP.58khSBhevIFgCdeMgXCqPwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', discount: '-42%', brand: 'NIKE', name: 'Giày Đá Bóng Nike Phantom Infinity', price: '2.150.000đ', oldPrice: '3.700.000đ', sizes: ['40', '41', '42', '43'] },
  ];

  featured = [
    { img: 'https://tse4.mm.bing.net/th/id/OIP.zSyXCC8PiMcppiRPA0tjaAHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3', tag: 'Mới', brand: 'ADIDAS', name: 'Áo Đấu Real Madrid Home 25/26', price: '1.350.000đ', bg: 'bg-gray-100' },
    { img: 'https://bizweb.dktcdn.net/thumb/1024x1024/100/340/361/products/bv2672-063-2025-02-28t090431-617.jpg?v=1740708337967', tag: 'Hot', brand: 'ASICS', name: 'Giày Chạy Bộ Asics Gel-Kayano 31', price: '3.990.000đ', bg: 'bg-blue-50' },
    { img: 'https://tse4.mm.bing.net/th/id/OIP.Ol-fGpYq3VNC5m4tCbPJdwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', tag: 'Mới', brand: 'PUMA', name: 'Giày Đá Bóng Puma Future 7 Pro', price: '2.690.000đ', bg: 'bg-lime-50' },
    { img: 'https://pos.nvncdn.com/6a2bd9-54198/ps/20220217_z1zK7WjmvKeombgCuIEoMGNm.jpeg?v=1673688552', tag: 'Bán chạy', brand: 'UNDER ARMOUR', name: 'Áo Nén Giữ Nhiệt UA HeatGear', price: '850.000đ', bg: 'bg-gray-100' },
    { img: 'https://tse1.mm.bing.net/th/id/OIP.ijq9g_HUn1GWpMOe57REXwHaHa?r=0&w=1440&h=1440&rs=1&pid=ImgDetMain&o=7&rm=3', tag: 'Hot', brand: 'PUMA', name: 'Áo Đấu Manchester Unnited Home', price: '1.420.000đ', bg: 'bg-sky-50' },
    { img: 'https://th.bing.com/th/id/OIP.O9jSzCyeNggGkCYoINTYFAHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', tag: 'Mới', brand: 'WILSON', name: 'Bóng Rổ Wilson NBA Authentic', price: '990.000đ', bg: 'bg-orange-50' },
    { img: 'https://th.bing.com/th/id/OIP.wswAELV8LVxCy1E1QEP-YgHaHa?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', tag: 'Bán chạy', brand: 'HOKA', name: 'Giày Chạy Bộ Hoka Clifton 9', price: '3.200.000đ', bg: 'bg-blue-50' },
    { img: 'https://www.xbinary01.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-08-25-at-16.37.52_a454afed-700x640.jpg', tag: 'Mới', brand: 'UNDER ARMOUR', name: 'Balo Thể Thao Training', price: '690.000đ', bg: 'bg-gray-100' },
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
      avatar: 'https://tse1.mm.bing.net/th/id/OIP.c7a6H3H1aC9OortRImLCVQHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
      text: 'Đôi Vaporfly 3 mua tại SportZone hỗ trợ mình lập PR Sub 3:30 tại giải chạy VnExpress Marathon Huế. Đệm nảy khủng khiếp, hàng chính hãng check mã QR chuẩn chỉ. Giao hàng hoả tốc trong ngày!',
    },
    {
      name: 'Nguyễn Văn Đạt',
      role: 'Đội Trưởng FC FPT Software',
      avatar: 'https://avatarmoi.com/wp-content/uploads/2025/07/hinh-anh-trai-bong-da.webp',
      text: 'Đặt in 18 bộ áo Real Madrid cho cả đội bóng công ty. Chất vải HEAT.RDY mát rượi, font số C1 in sắc nét từng góc cạnh không lem một tí nào. Sẽ tiếp tục ủng hộ SportZone mùa giải tới.',
    },
    {
      name: 'Phạm Minh Quân',
      role: 'Hà Nội • Khách hàng thân thiết VIP',
      avatar: 'https://i.pinimg.com/280x280_RS/54/b7/89/54b789d1cb833c9e5321c7ff35cd07b4.jpg',
      text: 'Dùng công cụ đo size chân online của shop ban đầu hơi lo không vừa, ai ngờ lúc nhận đôi Predator mang ôm khít chân hoàn hảo, đá không hề bị cấn ngón hay tuột gót. Dịch vụ quá xuất sắc!',
    },
  ];

  gallery = [
    'https://th.bing.com/th/id/OIP.a7iXcKfh02aZ0iFFu_d38gHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3', // chạy bộ buộc dây giày
    'https://tse1.mm.bing.net/th/id/OIP.67IImJb_94-p6_YIXH0AkQHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // bóng rổ
    'https://tse4.mm.bing.net/th/id/OIP.pMC6RZ5Q3nNYRdeiWlqK5wHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // bóng đá
    'https://img5.thuthuatphanmem.vn/uploads/2021/07/15/anh-nam-gymer-nang-ta_043025275.jpg', // gym
    'https://tse1.mm.bing.net/th/id/OIP.aCl6nnR_mFSYJ9x_ghTU0AHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', // marathon về đích
    'https://product.hstatic.net/200000293662/product/101eef4b-b0e4-48b5-82e7-7ee61c584f75_fafbdd71857b49c4802019a752bf3637_large.jpg', // áo đấu số 7
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}