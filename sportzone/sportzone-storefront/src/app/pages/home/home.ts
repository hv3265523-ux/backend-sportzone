import { Component, OnDestroy, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';

const pad = (n: number) => String(n).padStart(2, '0');

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnDestroy {
  private catalog = inject(ProductService);
  private cart = inject(CartService);

  // ===== Banner tự chạy =====
  // Ảnh để trong public/images/banners/
  banners = [
    'images/banners/banner1.jpg',
    'images/banners/banner2.jpg',
    'images/banners/banner3.jpg',
  ];
  currentBanner = signal(0);
  private bannerTimer = setInterval(
    () => this.currentBanner.update((i) => (i + 1) % this.banners.length),
    5000,
  );

  // ===== Đồng hồ đếm ngược đến 00:00:00 =====
  private now = signal(new Date());
  private clockTimer = setInterval(() => this.now.set(new Date()), 1000);
  private secondsLeft = computed(() => {
    const n = this.now();
    const end = new Date(n);
    end.setHours(24, 0, 0, 0);
    return Math.max(0, Math.floor((end.getTime() - n.getTime()) / 1000));
  });
  hh = computed(() => pad(Math.floor(this.secondsLeft() / 3600)));
  mm = computed(() => pad(Math.floor((this.secondsLeft() % 3600) / 60)));
  ss = computed(() => pad(this.secondsLeft() % 60));

  // ===== Dữ liệu =====
  benefits = [
    { icon: '🚚', title: 'Giao hàng nhanh', desc: '2-4 ngày toàn quốc', color: 'bg-blue-100' },
    { icon: '✅', title: 'Chính hãng 100%', desc: 'Hoàn tiền nếu hàng giả', color: 'bg-green-100' },
    { icon: '🔄', title: 'Đổi trả 30 ngày', desc: 'Miễn phí đổi size', color: 'bg-orange-100' },
    { icon: '🎧', title: 'Hỗ trợ 24/7', desc: 'Tư vấn tận tâm', color: 'bg-purple-100' },
  ];

  sports = [
    { name: 'Bóng đá', count: '320+ sản phẩm', img: 'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/10/30/969136/Cristiano-Ronaldo4.jpg' },
    { name: 'Chạy bộ', count: '210+ sản phẩm', img: 'https://th.bing.com/th/id/OIP.BkDkHiyJ4JmDoNhlAzi9TgHaE8?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Gym', count: '180+ sản phẩm', img: 'https://tse2.mm.bing.net/th/id/OIP.9qcVqc_apexd-1uekO0FjwHaEz?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Bóng rổ', count: '95+ sản phẩm', img: 'https://tse1.mm.bing.net/th/id/OIP.Uc8nvpomgXnKg4Cxe4fdigHaFj?r=0&w=640&h=480&rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Cầu lông', count: '120+ sản phẩm', img: 'https://tse2.mm.bing.net/th/id/OIP.zVK1K_k2OBmi3EuxweLu3AHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3' },
  ];

  brands = ['NIKE', 'ADIDAS', 'PUMA', 'ASICS', 'NEW BALANCE', 'UNDER ARMOUR'];

  hotDeal = this.catalog.getById(3)!; // Alphafly
  flashSale = this.catalog.getFlashSale();

  tabs = ['Tất cả', 'Áo đấu', 'Giày', 'Phụ kiện'];
  activeTab = 'Tất cả';

  get featured(): Product[] {
    const all = this.catalog.products;
    return this.activeTab === 'Tất cả' ? all : all.filter((p) => p.cat === this.activeTab);
  }

  checks = [
    'In tên & số bằng vinyl chuẩn thi đấu châu Âu',
    'Font chữ chính thức theo từng giải đấu',
    'Bền màu sau 50+ lần giặt',
    'Hoàn thiện trong 24-48 giờ',
  ];

  // Avatar để trong public/images/avatars/
  reviews = [
    { name: 'Minh Quân', role: 'Cầu thủ phong trào', text: 'Áo đẹp, vải nhẹ, in tên rất nét!', avatar: 'images/avatars/a1.jpg' },
    { name: 'Thu Hà', role: 'Runner Marathon', text: 'Giày êm, giao hàng nhanh, đúng size.', avatar: 'images/avatars/a2.jpg' },
    { name: 'Hoàng Nam', role: 'Gymer', text: 'Hàng chính hãng, tư vấn size rất chuẩn.', avatar: 'images/avatars/a3.jpg' },
  ];

  // Ảnh cộng đồng để trong public/images/gallery/
  gallery = [
    'images/gallery/g1.jpg',
    'images/gallery/g2.jpg',
    'images/gallery/g3.jpg',
    'images/gallery/g4.jpg',
    'images/gallery/g5.jpg',
    'images/gallery/g6.jpg',
  ];

  // ===== Thông báo nhỏ khi thêm giỏ =====
  message = signal('');
  private toastTimer: ReturnType<typeof setTimeout> | undefined;

  // Hiện giá dạng 1.420.000
  fmt(n: number) {
    return n.toLocaleString('vi-VN');
  }

  setTab(t: string) {
    this.activeTab = t;
  }

  addToCart(p: Product) {
    // Chưa chọn size ở trang chủ, khách chọn size ở trang chi tiết
    this.cart.add({ id: p.id, name: p.name, price: p.price, quantity: 1 });
    this.message.set('Đã thêm "' + p.name + '" vào giỏ!');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => this.message.set(''), 2500);
  }

  ngOnDestroy() {
    clearInterval(this.bannerTimer);
    clearInterval(this.clockTimer);
    clearTimeout(this.toastTimer);
  }
}