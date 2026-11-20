import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

const MAX_PRICE = 5000000;

const RANGES_FOOTBALL = [
  { label: '< 500.000đ', min: 0, max: 500000 },
  { label: '500k - 1.000.000đ', min: 500000, max: 1000000 },
  { label: '1tr - 2.000.000đ', min: 1000000, max: 2000000 },
  { label: '> 2.000.000đ', min: 2000000, max: MAX_PRICE },
];
const RANGES_OTHER = [
  { label: '< 1.000.000đ', min: 0, max: 1000000 },
  { label: '1tr - 2.500.000đ', min: 1000000, max: 2500000 },
  { label: '2.5tr - 4.500.000đ', min: 2500000, max: 4500000 },
  { label: '> 4.500.000đ', min: 4500000, max: MAX_PRICE },
];

const SIZE_AO = ['S', 'M', 'L', 'XL', 'XXL'];

const CATEGORIES: any = {
  'bong-da': {
    title: 'Bóng đá',
    titleFirst: false,
    pills: ['MÙA GIẢI 2024/25', 'CHÍNH HÃNG 100%'],
    heroEyebrow: '',
    hero1: 'BỨT PHÁ TỐC ĐỘ',
    hero2: 'LÀM CHỦ SÂN CỎ',
    heroDesc: 'Ưu đãi đến 40% cho áo đấu CLB & Đội tuyển mùa giải 2024/25 cùng bộ sưu tập giày đinh chuyên nghiệp sân cỏ nhân tạo & tự nhiên.',
    btn2: 'Dịch vụ ép tên & số font chuẩn quốc tế',
    corner: '',
    listTitle: 'BỘ SƯU TẬP BÓNG ĐÁ CHÍNH HÃNG',
    listDesc: 'Áo đấu CLB, Đội tuyển quốc gia, giày đinh sân cỏ nhân tạo và phụ kiện bóng đá đỉnh cao',
    chips: ['Tất cả sản phẩm (150+)', 'Áo đấu CLB 2024/25 (48)', 'Áo Đội tuyển quốc gia (32)', 'Giày đá bóng đinh TF/FG (45)', 'Quần đùi & Tất bóng đá (24)', 'Găng tay & Phụ kiện'],
    priceRanges: RANGES_FOOTBALL,
    groups: [
      { key: 'brand', title: 'Thương hiệu', pos: 'top' },
      { key: 'type', title: 'Loại sản phẩm', pos: 'top' },
      { key: 'extra', title: 'Câu lạc bộ & Đội tuyển', pos: 'bottom' },
    ],
    sizeGroups: [
      { title: 'Size áo bóng đá', note: '', options: SIZE_AO },
      { title: 'Size giày đá banh', note: '', options: ['39', '40', '41', '42', '43', '44'] },
    ],
  },
  'bong-ro': {
    title: 'Bóng rổ',
    titleFirst: true,
    eyebrow: 'BỘ MÔN THỂ THAO MỚI NHẤT',
    pills: ['NBA & FIBA GEAR', 'CHÍNH HÃNG 100%'],
    heroEyebrow: 'STORM BASKETBALL ARENA EDITION',
    hero1: 'LÀM CHỦ SÂN ĐẤU',
    hero2: 'TỪNG CÚ NÉM HOÀN HẢO',
    heroDesc: 'Ưu đãi đến 35% cho các dòng giày Signature LeBron, Curry, KD cùng trang phục thi đấu NBA mùa giải mới và phụ kiện bảo hộ chuyên sâu.',
    btn2: 'Trải nghiệm đệm Air Zoom & Bounce',
    corner: 'EXPLOSIVE PERFORMANCE ON COURT',
    listTitle: 'BỘ SƯU TẬP BÓNG RỔ CHÍNH HÃNG',
    listDesc: 'Giày bóng rổ chuyên dụng, áo đấu NBA, bóng rổ và phụ kiện bảo hộ cao cấp từ các thương hiệu dẫn đầu như Nike Basketball, Jordan Brand, Under Armour.',
    chips: ['Tất cả bóng rổ (120+)', 'Giày bóng rổ Nike/Jordan (48)', 'Áo đấu & Jersey NBA (35)', 'Bóng rổ thi đấu chính hãng (18)', 'Bảo vệ đầu gối/khuỷu tay (22)', 'Túi đựng bóng & Balo'],
    priceRanges: RANGES_OTHER,
    groups: [
      { key: 'brand', title: 'THƯƠNG HIỆU', pos: 'top' },
      { key: 'type', title: 'LOẠI SẢN PHẨM', pos: 'top' },
      { key: 'extra', title: 'NGÔI SAO NBA SIGNATURE', pos: 'bottom' },
    ],
    sizeGroups: [
      { title: 'SIZE GIÀY BÓNG RỔ', note: 'EU Size', options: ['40', '41', '42', '43', '44', '45'] },
      { title: 'SIZE QUẦN ÁO NBA', note: 'US/Standard', options: SIZE_AO },
    ],
  },
  'chay-bo': {
    title: 'Chạy bộ',
    titleFirst: true,
    eyebrow: 'BỘ MÔN THỂ THAO MỚI NHẤT',
    pills: ['RUNNING GEAR', 'CHÍNH HÃNG 100%'],
    heroEyebrow: 'SPORTZONE RUNNING EDITION',
    hero1: 'CHẠY XA HƠN',
    hero2: 'NHANH HƠN MỖI NGÀY',
    heroDesc: 'Giày chạy bộ carbon, đồ chạy thoáng khí Dri-FIT giảm đến 50% cho mọi runner.',
    btn2: 'Tư vấn chọn giày chạy bộ',
    corner: 'BUILT FOR SPEED',
    listTitle: 'BỘ SƯU TẬP CHẠY BỘ CHÍNH HÃNG',
    listDesc: 'Giày chạy, quần áo và phụ kiện cho runner mọi trình độ từ Nike, Asics, Adidas.',
    chips: ['Tất cả chạy bộ (90+)', 'Giày chạy bộ (40)', 'Áo chạy bộ (25)', 'Quần chạy bộ (15)', 'Phụ kiện chạy bộ (20)'],
    priceRanges: RANGES_OTHER,
    groups: [
      { key: 'brand', title: 'THƯƠNG HIỆU', pos: 'top' },
      { key: 'type', title: 'LOẠI SẢN PHẨM', pos: 'top' },
    ],
    sizeGroups: [
      { title: 'SIZE GIÀY CHẠY BỘ', note: 'EU Size', options: ['40', '41', '42', '43', '44'] },
      { title: 'SIZE QUẦN ÁO', note: '', options: SIZE_AO },
    ],
  },
};

// Dữ liệu giả (sau này thay bằng API). Thêm image: 'images/ten-anh.png' nếu có ảnh.
const PRODUCTS = [
  // ===== Bóng đá =====
  { name: 'Áo Đấu Manchester City 2024/25', brand: 'Puma', pill: 'PUMA', tag: 'In tên số chuẩn', price: 1040000, old: 1300000, rating: 4.9, reviews: 128, sizes: 'S M L XL', type: 'Áo đấu thi đấu (Match / Fan)', extra: 'Manchester City', category: 'bong-da' },
  { name: 'Áo Đấu Real Madrid Sân Nhà', brand: 'Adidas', pill: 'ADIDAS', tag: 'In Bellingham 5', price: 990000, old: 1200000, rating: 5.0, reviews: 94, sizes: 'S M L XL', type: 'Áo đấu thi đấu (Match / Fan)', extra: 'Real Madrid', category: 'bong-da' },
  { name: 'Giày Đá Bóng Nike Mercurial Superfly', brand: 'Nike', pill: 'ELITE FG', tag: 'Top End Cổ Tự Nhiên', price: 3450000, old: 4200000, rating: 4.9, reviews: 86, sizes: '39 40 41 42', type: 'Giày đinh sân cỏ (TF / FG / AG)', extra: '', category: 'bong-da' },
  { name: 'Giày Đá Bóng Mizuno Morelia', brand: 'Mizuno', pill: 'ĐỈNH TF', tag: 'Chuyên Sân Cỏ Nhân Tạo', price: 2150000, old: 2500000, rating: 4.8, reviews: 112, sizes: '39 40 41 42', type: 'Giày đinh sân cỏ (TF / FG / AG)', extra: '', category: 'bong-da' },
  { name: 'Áo Đấu Đội Tuyển Việt Nam Sân Nhà', brand: 'Nike', pill: 'VIỆT NAM', tag: 'Đội Tuyển Quốc Gia', price: 680000, old: 850000, rating: 5.0, reviews: 210, sizes: 'S M L XL', type: 'Áo đấu thi đấu (Match / Fan)', extra: 'Đội tuyển Việt Nam', category: 'bong-da' },
  { name: 'Áo Đấu Arsenal Home Kit 2024/25', brand: 'Adidas', pill: 'ADIDAS', tag: 'In Saka 7', price: 950000, old: 1250000, rating: 4.8, reviews: 65, sizes: 'S M L XL', type: 'Áo đấu thi đấu (Match / Fan)', extra: 'Arsenal FC', category: 'bong-da' },
  { name: 'Găng Tay Thủ Môn Predator Pro', brand: 'Adidas', pill: 'PRO GK', tag: 'Xốp Ngón Chống Lệch', price: 1450000, old: 1800000, rating: 4.9, reviews: 42, sizes: '8 9 10', type: 'Găng tay & Phụ kiện bảo hộ', extra: '', category: 'bong-da' },
  { name: 'Bóng Đá Thi Đấu Molten Vantaggio', brand: 'Molten', pill: 'FIFA PRO', tag: 'Chuẩn V-League', price: 1280000, old: 1600000, rating: 5.0, reviews: 78, sizes: 'Size 5', type: 'Bóng thi đấu tiêu chuẩn FIFA', extra: '', category: 'bong-da' },
  { name: 'Giày Đá Bóng Puma Future', brand: 'Puma', pill: 'PUMA', tag: 'Ôm Chân Linh Hoạt', price: 2800000, old: 3300000, rating: 4.7, reviews: 53, sizes: '39 40 41 42', type: 'Giày đinh sân cỏ (TF / FG / AG)', extra: '', category: 'bong-da' },
  { name: 'Tất Đá Bóng Chống Trượt', brand: 'Nike', pill: 'NIKE', tag: 'Chống Trượt', price: 120000, old: 150000, rating: 4.6, reviews: 301, sizes: 'Free size', type: 'Găng tay & Phụ kiện bảo hộ', extra: '', category: 'bong-da' },

  // ===== Bóng rổ =====
  { name: 'Giày Bóng Rổ Nike LeBron Witness 8 EP', brand: 'Nike Basketball', pill: 'LeBron James', line: 'NIKE BASKETBALL', price: 2390000, old: 2990000, rating: 4.9, reviews: 112, sizes: '41 42 43 44', type: 'Giày bóng rổ cổ cao / thấp', extra: 'LeBron James', category: 'bong-ro' },
  { name: 'Áo Đấu Los Angeles Lakers 24/25 Swingman (James...)', brand: 'Nike Basketball', pill: 'NBA Official', line: 'NIKE NBA APPAREL', price: 1850000, old: 2180000, rating: 5.0, reviews: 98, sizes: 'S M L XL', type: 'Áo đấu NBA Swingman / Fan', extra: 'LeBron James', category: 'bong-ro' },
  { name: 'Giày Bóng Rổ Air Jordan Luka 2 PF', brand: 'Jordan Brand', pill: 'IsoPlate Tech', line: 'JORDAN BRAND', price: 2890000, old: 3520000, rating: 4.9, reviews: 76, sizes: '40 41 42 43', type: 'Giày bóng rổ cổ cao / thấp', extra: '', category: 'bong-ro' },
  { name: 'Bóng Rổ Spalding NBA Official Game Ball Da Thật', brand: 'Spalding & Molten', pill: 'Tiêu Chuẩn NBA', line: 'SPALDING EQUIPMENT', price: 1450000, old: 1700000, rating: 4.9, reviews: 146, sizes: 'Size 7', type: 'Bóng thi đấu tiêu chuẩn FIBA', extra: '', category: 'bong-ro' },
  { name: 'Giày Bóng Rổ Under Armour Curry 11 Future', brand: 'Under Armour', pill: 'Curry Flow', line: 'UNDER ARMOUR', price: 3250000, old: 4190000, rating: 4.8, reviews: 44, sizes: '41 42 43', type: 'Giày bóng rổ cổ cao / thấp', extra: 'Stephen Curry', category: 'bong-ro' },
  { name: 'Áo Đấu Golden State Warriors Nike (Curry 30)', brand: 'Nike Basketball', pill: 'In Áo Chuẩn', line: 'NIKE NBA APPAREL', price: 1850000, old: 2180000, rating: 4.9, reviews: 88, sizes: 'S M L XL', type: 'Áo đấu NBA Swingman / Fan', extra: 'Stephen Curry', category: 'bong-ro' },
  { name: 'Băng Gối Giảm Chấn McDavid Hex Knee Pads', brand: 'McDavid', pill: 'Giảm Chấn Hex', line: 'MCDAVID SPORTS MEDICAL', price: 680000, old: 910000, rating: 4.8, reviews: 91, sizes: 'S M L XL', type: 'Bảo hộ đai và Phụ kiện bóng rổ', extra: '', category: 'bong-ro' },
  { name: 'Balo Đựng Bóng Rổ Nike Hoops Elite Pro (38L)', brand: 'Nike Basketball', pill: 'Ngăn Riêng 38L', line: 'NIKE ACCESSORIES', price: 1250000, old: 1560000, rating: 4.9, reviews: 91, sizes: 'Free size', type: 'Bảo hộ đai và Phụ kiện bóng rổ', extra: '', category: 'bong-ro' },
  { name: 'Giày Bóng Rổ Nike KD 16', brand: 'Nike Basketball', pill: 'Kevin Durant', line: 'NIKE BASKETBALL', price: 3100000, old: 3700000, rating: 4.8, reviews: 63, sizes: '41 42 43 44', type: 'Giày bóng rổ cổ cao / thấp', extra: 'Kevin Durant', category: 'bong-ro' },
  { name: 'Giày Air Jordan 1 Retro High OG', brand: 'Jordan Brand', pill: 'Michael Jordan', line: 'JORDAN BRAND', price: 4290000, old: 4900000, rating: 5.0, reviews: 120, sizes: '40 41 42 43 44', type: 'Giày bóng rổ cổ cao / thấp', extra: 'Michael Jordan', category: 'bong-ro' },
  { name: 'Áo Đấu Chicago Bulls Jordan (Jordan 23)', brand: 'Jordan Brand', pill: 'NBA Official', line: 'JORDAN BRAND', price: 1790000, old: 2100000, rating: 4.9, reviews: 57, sizes: 'S M L XL XXL', type: 'Áo đấu NBA Swingman / Fan', extra: 'Michael Jordan', category: 'bong-ro' },
  { name: 'Bóng Rổ Molten GG7X Chuẩn FIBA', brand: 'Spalding & Molten', pill: 'Chuẩn FIBA', line: 'MOLTEN EQUIPMENT', price: 1650000, old: 1900000, rating: 4.8, reviews: 70, sizes: 'Size 7', type: 'Bóng thi đấu tiêu chuẩn FIBA', extra: '', category: 'bong-ro' },

  // ===== Chạy bộ =====
  { name: 'Giày Chạy Bộ Nike Alphafly 3', brand: 'Nike', pill: 'Carbon Plate', line: 'NIKE RUNNING', price: 4290000, old: 7800000, rating: 5.0, reviews: 99, sizes: '40 41 42 43', type: 'Giày chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Giày Chạy Bộ Asics Gel-Nimbus', brand: 'Asics', pill: 'Đệm Êm', line: 'ASICS RUNNING', price: 3100000, old: 3700000, rating: 4.9, reviews: 58, sizes: '40 41 42 43', type: 'Giày chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Giày Chạy Bộ Adidas Adizero', brand: 'Adidas', pill: 'Siêu Nhẹ', line: 'ADIDAS RUNNING', price: 3600000, old: 4300000, rating: 4.8, reviews: 47, sizes: '41 42 43 44', type: 'Giày chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Áo Chạy Bộ Nike Dri-FIT', brand: 'Nike', pill: 'Dri-FIT', line: 'NIKE RUNNING', price: 520000, old: 650000, rating: 4.8, reviews: 140, sizes: 'S M L XL', type: 'Áo chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Áo Ba Lỗ Chạy Bộ Asics', brand: 'Asics', pill: 'Thoáng Khí', line: 'ASICS RUNNING', price: 450000, old: 560000, rating: 4.7, reviews: 36, sizes: 'S M L XL', type: 'Áo chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Quần Short Chạy Bộ Asics', brand: 'Asics', pill: 'Siêu Nhẹ', line: 'ASICS RUNNING', price: 390000, old: 480000, rating: 4.7, reviews: 62, sizes: 'S M L XL', type: 'Quần chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Quần Legging Chạy Bộ Nike', brand: 'Nike', pill: 'Co Giãn 4 Chiều', line: 'NIKE RUNNING', price: 750000, old: 900000, rating: 4.8, reviews: 41, sizes: 'S M L XL', type: 'Quần chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Đai Đeo Điện Thoại Chạy Bộ', brand: 'Adidas', pill: 'Chống Nước', line: 'ADIDAS ACCESSORIES', price: 180000, old: 230000, rating: 4.5, reviews: 77, sizes: 'Free size', type: 'Phụ kiện chạy bộ', extra: '', category: 'chay-bo' },
  { name: 'Mũ Lưỡi Trai Chạy Bộ', brand: 'Nike', pill: 'Chống UV', line: 'NIKE ACCESSORIES', price: 250000, old: 320000, rating: 4.6, reviews: 52, sizes: 'Free size', type: 'Phụ kiện chạy bộ', extra: '', category: 'chay-bo' },
];

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [DecimalPipe, RouterLink],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {
  info: any = {};
  all: any[] = [];

  // Bộ lọc
  selected: { [key: string]: string[] } = {};
  selectedSizes: string[] = [];
  maxLimit = MAX_PRICE;
  minPrice = 0;
  maxPrice = MAX_PRICE;

  sortType = '';
  page = 1;
  pageSize = 8;
  activeChip = 0;

  constructor(route: ActivatedRoute) {
    route.data.subscribe((d) => {
      this.info = CATEGORIES[d['slug']];
      this.all = PRODUCTS.filter((p) => p.category === d['slug']);
      this.reset();
    });
  }

  // Các nhóm checkbox ở trên / dưới
  groupsAt(pos: string) {
    return this.info.groups.filter((g: any) => g.pos === pos);
  }

  // Danh sách lựa chọn + số lượng, tự tính từ sản phẩm
  options(key: string) {
    const map: any = {};
    this.all.forEach((p: any) => {
      const v = p[key];
      if (v) map[v] = (map[v] || 0) + 1;
    });
    return Object.keys(map).map((name) => ({ name, count: map[name] }));
  }

  isSelected(key: string, name: string) {
    return (this.selected[key] || []).includes(name);
  }

  toggle(key: string, name: string) {
    const list = this.selected[key] || [];
    this.selected[key] = list.includes(name) ? list.filter((x) => x !== name) : [...list, name];
    this.page = 1;
  }

  toggleSize(s: string) {
    this.selectedSizes = this.selectedSizes.includes(s)
      ? this.selectedSizes.filter((x) => x !== s)
      : [...this.selectedSizes, s];
    this.page = 1;
  }

  // Giá
  setRange(r: any) {
    if (this.isRange(r)) {
      this.minPrice = 0;
      this.maxPrice = MAX_PRICE;
    } else {
      this.minPrice = r.min;
      this.maxPrice = r.max;
    }
    this.page = 1;
  }

  isRange(r: any) {
    return this.minPrice === r.min && this.maxPrice === r.max;
  }

  setMin(e: Event) {
    const el = e.target as HTMLInputElement;
    this.minPrice = Math.min(Number(el.value), this.maxPrice - 100000);
    el.value = String(this.minPrice);
    this.page = 1;
  }

  setMax(e: Event) {
    const el = e.target as HTMLInputElement;
    this.maxPrice = Math.max(Number(el.value), this.minPrice + 100000);
    el.value = String(this.maxPrice);
    this.page = 1;
  }

  get activeCount() {
    let n = this.selectedSizes.length;
    Object.keys(this.selected).forEach((k) => (n += this.selected[k].length));
    if (this.minPrice > 0 || this.maxPrice < MAX_PRICE) n++;
    return n;
  }

  get filtered() {
    let list = this.all.filter((p: any) => {
      for (const key of Object.keys(this.selected)) {
        const s = this.selected[key];
        if (s.length && !s.includes(p[key])) return false;
      }
      if (p.price < this.minPrice || p.price > this.maxPrice) return false;
      if (this.selectedSizes.length) {
        const has = p.sizes.split(' ').some((x: string) => this.selectedSizes.includes(x));
        if (!has) return false;
      }
      return true;
    });
    if (this.sortType === 'asc') list = [...list].sort((a, b) => a.price - b.price);
    if (this.sortType === 'desc') list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }

  get shown() {
    const start = (this.page - 1) * this.pageSize;
    return this.filtered.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filtered.length / this.pageSize) || 1;
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get from() {
    return this.filtered.length === 0 ? 0 : (this.page - 1) * this.pageSize + 1;
  }

  get to() {
    return Math.min(this.page * this.pageSize, this.filtered.length);
  }

  setSort(value: string) {
    this.sortType = value;
    this.page = 1;
  }

  goPage(n: number) {
    if (n >= 1 && n <= this.totalPages) this.page = n;
  }

  reset() {
    this.selected = {};
    this.selectedSizes = [];
    this.minPrice = 0;
    this.maxPrice = MAX_PRICE;
    this.sortType = '';
    this.page = 1;
    this.activeChip = 0;
  }

  percent(p: any) {
    return Math.round(((p.old - p.price) / p.old) * 100);
  }

  addToCart(p: any) {
    // Gọi CartService của bạn ở đây, ví dụ: this.cart.add(p)
    console.log('Thêm vào giỏ:', p.name);
  }
}