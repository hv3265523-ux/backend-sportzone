import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DecimalPipe } from '@angular/common';

const CATEGORIES: any = {
  'bong-da': {
    title: 'Bóng đá',
    hero1: 'BỨT PHÁ TỐC ĐỘ',
    hero2: 'LÀM CHỦ SÂN CỎ',
    heroDesc: 'Ưu đãi đến 40% cho áo đấu CLB & Đội tuyển mùa giải 2024/25 cùng bộ sưu tập giày đinh chuyên nghiệp.',
    listTitle: 'BỘ SƯU TẬP BÓNG ĐÁ CHÍNH HÃNG',
    listDesc: 'Áo đấu CLB, Đội tuyển quốc gia, giày đinh sân cỏ nhân tạo và phụ kiện bóng đá đỉnh cao',
    chips: ['Tất cả sản phẩm', 'Áo đấu CLB 2024/25', 'Áo Đội tuyển quốc gia', 'Giày đá bóng đinh TF/FG', 'Quần đùi & Tất bóng đá'],
  },
  'bong-ro': {
    title: 'Bóng rổ',
    hero1: 'BỨT PHÁ GIỚI HẠN',
    hero2: 'THỐNG TRỊ SÂN BÓNG RỔ',
    heroDesc: 'Giày, áo đấu và bóng rổ chính hãng cho mọi cầu thủ.',
    listTitle: 'BỘ SƯU TẬP BÓNG RỔ CHÍNH HÃNG',
    listDesc: 'Giày bóng rổ, áo đấu và phụ kiện cho người chơi chuyên nghiệp',
    chips: ['Tất cả sản phẩm', 'Giày bóng rổ', 'Áo đấu', 'Bóng rổ', 'Phụ kiện'],
  },
  'chay-bo': {
    title: 'Chạy bộ',
    hero1: 'CHẠY XA HƠN',
    hero2: 'NHANH HƠN MỖI NGÀY',
    heroDesc: 'Giày chạy bộ carbon, đồ chạy thoáng khí Dri-FIT giảm đến 50%.',
    listTitle: 'BỘ SƯU TẬP CHẠY BỘ CHÍNH HÃNG',
    listDesc: 'Giày chạy, quần áo và phụ kiện cho runner mọi trình độ',
    chips: ['Tất cả sản phẩm', 'Giày chạy bộ', 'Áo chạy bộ', 'Quần short', 'Phụ kiện'],
  },
};

// Dữ liệu giả (sau này thay bằng API)
const PRODUCTS = [
  // Bóng đá
  { name: 'Áo Đấu Manchester City 2024/25', brand: 'Puma', price: 1040000, old: 1300000, rating: 4.9, reviews: 128, tag: 'In tên số chuẩn', sizes: 'S M L XL', category: 'bong-da' },
  { name: 'Áo Đấu Real Madrid Sân Nhà', brand: 'Adidas', price: 990000, old: 1200000, rating: 5.0, reviews: 94, tag: 'In Bellingham 5', sizes: 'S M L XL', category: 'bong-da' },
  { name: 'Giày Đá Bóng Nike Mercurial Superfly', brand: 'Nike', price: 3450000, old: 4200000, rating: 4.9, reviews: 86, tag: 'Top End Cổ Tự Nhiên', sizes: '39 40 41 42', category: 'bong-da' },
  { name: 'Giày Đá Bóng Mizuno Morelia', brand: 'Mizuno', price: 2150000, old: 2500000, rating: 4.8, reviews: 112, tag: 'Chuyên Sân Cỏ Nhân Tạo', sizes: '39 40 41 42', category: 'bong-da' },
  { name: 'Áo Đấu Đội Tuyển Việt Nam Sân Nhà', brand: 'Nike', price: 680000, old: 850000, rating: 5.0, reviews: 210, tag: 'Đội Tuyển Quốc Gia', sizes: 'S M L XL', category: 'bong-da' },
  { name: 'Áo Đấu Arsenal Home Kit 2024/25', brand: 'Adidas', price: 950000, old: 1250000, rating: 4.8, reviews: 65, tag: 'In Saka 7', sizes: 'S M L XL', category: 'bong-da' },
  { name: 'Găng Tay Thủ Môn Predator Pro', brand: 'Adidas', price: 1450000, old: 1800000, rating: 4.9, reviews: 42, tag: 'Xốp Ngón Chống Lệch', sizes: '8 9 10', category: 'bong-da' },
  { name: 'Bóng Đá Thi Đấu Molten Vantaggio', brand: 'Molten', price: 1280000, old: 1600000, rating: 5.0, reviews: 78, tag: 'Chuẩn V-League', sizes: 'Size 5', category: 'bong-da' },
  { name: 'Giày Đá Bóng Puma Future', brand: 'Puma', price: 2800000, old: 3300000, rating: 4.7, reviews: 53, tag: 'Ôm Chân Linh Hoạt', sizes: '39 40 41 42', category: 'bong-da' },
  { name: 'Tất Đá Bóng Chống Trượt', brand: 'Nike', price: 120000, old: 150000, rating: 4.6, reviews: 301, tag: 'Chống Trượt', sizes: 'Free size', category: 'bong-da' },
  // Bóng rổ
  { name: 'Giày Bóng Rổ Nike LeBron', brand: 'Nike', price: 3200000, old: 3800000, rating: 4.9, reviews: 71, tag: 'Đệm Zoom Air', sizes: '40 41 42 43', category: 'bong-ro' },
  { name: 'Áo Đấu Bóng Rổ Adidas', brand: 'Adidas', price: 750000, old: 900000, rating: 4.7, reviews: 44, tag: 'Thoáng Khí', sizes: 'S M L XL', category: 'bong-ro' },
  { name: 'Bóng Rổ Da Spalding Size 7', brand: 'Spalding', price: 600000, old: 720000, rating: 4.8, reviews: 120, tag: 'Chuẩn Thi Đấu', sizes: 'Size 7', category: 'bong-ro' },
  { name: 'Quần Short Bóng Rổ Nike', brand: 'Nike', price: 420000, old: 500000, rating: 4.6, reviews: 39, tag: 'Dri-FIT', sizes: 'S M L XL', category: 'bong-ro' },
  { name: 'Băng Đô Thể Thao Adidas', brand: 'Adidas', price: 90000, old: 120000, rating: 4.5, reviews: 85, tag: 'Thấm Mồ Hôi', sizes: 'Free size', category: 'bong-ro' },
  // Chạy bộ
  { name: 'Giày Chạy Bộ Nike Alphafly 3', brand: 'Nike', price: 4290000, old: 7800000, rating: 5.0, reviews: 99, tag: 'Carbon Plate', sizes: '40 41 42 43', category: 'chay-bo' },
  { name: 'Áo Chạy Bộ Dri-FIT', brand: 'Nike', price: 520000, old: 650000, rating: 4.8, reviews: 140, tag: 'Dri-FIT', sizes: 'S M L XL', category: 'chay-bo' },
  { name: 'Quần Short Chạy Bộ Asics', brand: 'Asics', price: 390000, old: 480000, rating: 4.7, reviews: 62, tag: 'Siêu Nhẹ', sizes: 'S M L XL', category: 'chay-bo' },
  { name: 'Đai Đeo Điện Thoại Chạy Bộ', brand: 'Adidas', price: 180000, old: 230000, rating: 4.5, reviews: 77, tag: 'Chống Nước', sizes: 'Free size', category: 'chay-bo' },
  { name: 'Giày Chạy Bộ Asics Gel-Nimbus', brand: 'Asics', price: 3100000, old: 3700000, rating: 4.9, reviews: 58, tag: 'Đệm Êm', sizes: '40 41 42 43', category: 'chay-bo' },
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

  selectedBrands: string[] = [];
  priceRange: any = null;
  sortType = '';
  page = 1;
  pageSize = 8;
  activeChip = 0;

  priceRanges = [
    { label: '< 500.000đ', min: 0, max: 500000 },
    { label: '500k - 1.000.000đ', min: 500000, max: 1000000 },
    { label: '1tr - 2.000.000đ', min: 1000000, max: 2000000 },
    { label: '> 2.000.000đ', min: 2000000, max: 999999999 },
  ];
  sizesAo = ['S', 'M', 'L', 'XL', 'XXL'];
  sizesGiay = ['39', '40', '41', '42', '43', '44'];
  selectedSizes: string[] = [];

  constructor(route: ActivatedRoute) {
    route.data.subscribe((d) => {
      this.info = CATEGORIES[d['slug']];
      this.all = PRODUCTS.filter((p) => p.category === d['slug']);
      this.reset();
    });
  }

  // Danh sách thương hiệu + số lượng, tự tính từ sản phẩm
  get brands() {
    const map: any = {};
    this.all.forEach((p) => (map[p.brand] = (map[p.brand] || 0) + 1));
    return Object.keys(map).map((name) => ({ name, count: map[name] }));
  }

  get filtered() {
    let list = this.all.filter(
      (p) =>
        (this.selectedBrands.length === 0 || this.selectedBrands.includes(p.brand)) &&
        (!this.priceRange || (p.price >= this.priceRange.min && p.price < this.priceRange.max))
    );
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

  toggleBrand(name: string) {
    const i = this.selectedBrands.indexOf(name);
    i >= 0 ? this.selectedBrands.splice(i, 1) : this.selectedBrands.push(name);
    this.page = 1;
  }

  setPrice(r: any) {
    this.priceRange = this.priceRange === r ? null : r;
    this.page = 1;
  }

  toggleSize(s: string) {
    const i = this.selectedSizes.indexOf(s);
    i >= 0 ? this.selectedSizes.splice(i, 1) : this.selectedSizes.push(s);
  }

  setSort(value: string) {
    this.sortType = value;
    this.page = 1;
  }

  goPage(n: number) {
    if (n >= 1 && n <= this.totalPages) this.page = n;
  }

  reset() {
    this.selectedBrands = [];
    this.priceRange = null;
    this.selectedSizes = [];
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