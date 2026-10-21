import { Injectable } from '@angular/core';

export interface Review {
  name: string;
  stars: number;
  text: string;
}

export interface CareItem {
  icon: string;
  title: string;
  text: string;
}

export interface Product {
  id: number;
  cat: 'Áo đấu' | 'Giày' | 'Phụ kiện';
  type: string; // hiện ở phần gợi ý, vd: "Nam / Quần đấu"
  tag: string;
  badge: string;
  brand: string;
  name: string;
  rating: number;
  sold: number;
  price: number;
  oldPrice: number;
  discount: number;
  images: string[];
  colors: string[];
  sizes: string[];
  voucher: string;
  techTitle: string;
  techText: string;
  specs: string[];
  reviews: Review[];
  care: CareItem[];
}

// Mỗi sản phẩm có 4 ô ảnh: ảnh 1 (ảnh lớn + ô nhỏ đầu), ảnh 2, ảnh 3, ảnh 4.
// Ô nào chưa có link thì tự dùng lại ảnh 1.
// Muốn thêm ảnh: bỏ dấu // ở đầu dòng "ẢNH 2/3/4" rồi dán link vào giữa 2 dấu nháy.
const imgs = (src: string | string[]) => {
  const list = (Array.isArray(src) ? src : [src]).filter(Boolean);
  return [0, 1, 2, 3].map((i) => list[i] ?? list[0]);
};

const VOUCHER = 'Giảm thêm 50.000đ cho đơn từ 1.000.000đ';

const REVIEWS: Review[] = [
  { name: 'Minh Quân', stars: 5, text: 'Sản phẩm đẹp, chất lượng rất tốt!' },
  { name: 'Hoàng Nam', stars: 5, text: 'Giao hàng nhanh, đúng size, hàng chính hãng.' },
  { name: 'Thu Hà', stars: 4, text: 'Màu đẹp, form hơi ôm nên lấy lớn 1 size.' },
];

const CARE: CareItem[] = [
  { icon: 'local_laundry_service', title: 'Giặt nhẹ, giặt tay', text: 'Ưu tiên giặt tay hoặc giặt máy chế độ nhẹ, nước lạnh' },
  { icon: 'flip_camera_android', title: 'Lộn trái áo', text: 'Lộn trái trước khi giặt để bảo vệ logo và số áo' },
  { icon: 'block', title: 'Không tẩy, không ủi', text: 'Không dùng chất tẩy, không ủi lên logo và chữ in' },
  { icon: 'wb_shade', title: 'Phơi nơi thoáng mát', text: 'Phơi trong bóng râm, tránh ánh nắng trực tiếp' },
];

const SIZES_SHIRT = ['S', 'M', 'L', 'XL', 'XXL'];
const SIZES_SHOE = ['39', '40', '41', '42', '43'];

// Dữ liệu giả (sau này thay bằng API của Phúc)
const PRODUCTS: Product[] = [
  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 1 — Áo Đấu Manchester United Home                  ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 1,
    cat: 'Áo đấu',
    type: 'Nam / Áo đấu',
    tag: 'BÁN CHẠY',
    badge: 'AUTHENTIC PLAYER ISSUE',
    brand: 'PUMA SPORTZONE',
    name: 'Áo Đấu Manchester United Home',
    rating: 4.8,
    sold: 1020,
    price: 1420000,
    oldPrice: 1775000,
    discount: 20,
    images: imgs([
      'https://cdn.hstatic.net/products/200000293662/106_bb2dfe1b14844c6ca95b401950ea8e9b_1024x1024.png', // ẢNH 1
       'https://cdn.hstatic.net/products/200000293662/109_a77ca1c73ac8470b868230a0b370e2bd_1024x1024.png', // ẢNH 2
       'https://cdn.hstatic.net/products/200000293662/108_90e51336d24d4964a02e381343865a9d_1024x1024.png', // ẢNH 3
       'https://cdn.hstatic.net/products/200000293662/111_e69c7b544e4c4175b7cc94cc84a4a5ca_1024x1024.png', // ẢNH 4
    ]),
    colors: ['Đỏ '],
    sizes: SIZES_SHIRT,
    voucher: VOUCHER,
    techTitle: 'Công Nghệ Vải Puma ULTRAWEAVE™ Siêu Nhẹ 72 Grams',
    techText:
      'Mẫu áo đấu Manchester United Home được thiết kế dành cho cầu thủ chuyên nghiệp. Chất vải siêu nhẹ, thoáng khí và co giãn tốt, giúp bạn thoải mái cả khi thi đấu lẫn khi mặc hằng ngày. Logo và huy hiệu được ép nhiệt chính xác, bền màu sau nhiều lần giặt.',
    specs: [
      'Thương hiệu: PUMA',
      'Chất liệu: Polyester ULTRAWEAVE',
      'Trọng lượng: 72 gram',
      'Form: Authentic (ôm vừa người)',
      'Xuất xứ: Việt Nam',
    ],
    reviews: [
      { name: 'Minh Quân', stars: 5, text: 'Áo đẹp, vải rất nhẹ và mát!' },
      { name: 'Hoàng Nam', stars: 5, text: 'Giao hàng nhanh, đúng size, hàng chính hãng.' },
      { name: 'Thu Hà', stars: 4, text: 'Màu đẹp, form hơi ôm nên lấy lớn 1 size.' },
    ],
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 2 — Áo Đấu Real Madrid Away                        ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 2,
    cat: 'Áo đấu',
    type: 'Nam / Áo đấu',
    tag: 'MỚI',
    badge: 'REPLICA DÁNFAN VERSION',
    brand: 'ADIDAS',
    name: 'Áo Đấu Real Madrid Away',
    rating: 4.7,
    sold: 860,
    price: 1190000,
    oldPrice: 1700000,
    discount: 30,
    images: imgs([
      'https://cdn.hstatic.net/products/200000293662/ao-bong-da-real-madrid-san-nha-26-27-climacool-tong-the_5d7f4df4a2704ef081506f1303620001_1024x1024.jpg', // ẢNH 1
       'https://cdn.hstatic.net/products/200000293662/ao-bong-da-real-madrid-san-nha-26-27-climacool-chi-tiet-logo-adidas_ca3856c9b45f49d78385c321d1858891_1024x1024.jpg', // ẢNH 2
       'https://cdn.hstatic.net/products/200000293662/ao-bong-da-real-madrid-san-nha-26-27-climacool-huy-hieu-clb_e5f6e711556c47c08e647841df7b748f_1024x1024.jpg', // ẢNH 3
      'https://cdn.hstatic.net/products/200000293662/ao-bong-da-real-madrid-san-nha-26-27-climacool-logo-tay-ao_8cbfc2abacb64087bcc3bcab717d0318_1024x1024.jpg', // ẢNH 4
    ]),
    colors: [ 'Trắng Home'],
    sizes: SIZES_SHIRT,
    voucher: VOUCHER,
    techTitle: 'Công Nghệ AEROREADY Thấm Hút Mồ Hôi Vượt Trội',
    techText:
      'Áo đấu Real Madrid Away sử dụng chất liệu tái chế thân thiện môi trường, thấm hút mồ hôi nhanh và khô thoáng suốt trận đấu. Logo được thêu tinh xảo, form áo thoải mái cho cả đá bóng lẫn mặc hằng ngày.',
    specs: ['Thương hiệu: ADIDAS', 'Chất liệu: Polyester tái chế', 'Công nghệ: AEROREADY', 'Form: Regular fit', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 3 — Giày Chạy Bộ Nike Alphafly 3                   ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 3,
    cat: 'Giày',
    type: 'Nam / Giày chạy bộ',
    tag: 'HOT DEAL',
    badge: 'CARBON PLATE RACING',
    brand: 'NIKE',
    name: 'Giày Chạy Bộ Nike Alphafly 3',
    rating: 4.9,
    sold: 540,
    price: 4290000,
    oldPrice: 7800000,
    discount: 45,
    images: imgs([
      'https://cdn.hstatic.net/products/1000008082/2xcz4_cc40abeace7140c4a055ba415abd30b1_master.jpeg', // ẢNH 1
      'https://cdn.hstatic.net/products/1000008082/2xcz8_b6e448f891d7488e9787009760402501_master.jpeg', // ẢNH 2
       'https://cdn.hstatic.net/products/1000008082/2xcz3_21f40195417140fea520e6db3c0eade8_master.jpeg  ', // ẢNH 3
       'https://cdn.hstatic.net/products/1000008082/2xcz7_5b28ffe3504b4fdda4f6d64c919c8327_master.jpeg', // ẢNH 4
    ]),
    colors: ['Xanh Lime'],
    sizes: SIZES_SHOE,
    voucher: VOUCHER,
    techTitle: 'Đệm Khí ZoomX & Tấm Carbon Siêu Tốc',
    techText:
      'Alphafly 3 được thiết kế cho các chân chạy marathon với đệm ZoomX hoàn trả năng lượng cao và tấm carbon giúp tối ưu từng sải chạy. Phần upper nhẹ, thoáng khí, ôm chân chắc chắn.',
    specs: ['Thương hiệu: NIKE', 'Đệm: ZoomX + Air Zoom', 'Tấm carbon full-length', 'Drop: 4 mm', 'Dùng cho: Marathon, đường nhựa'],
    reviews: REVIEWS,
    care: [
      { icon: 'cleaning_services', title: 'Vệ sinh nhẹ nhàng', text: 'Dùng bàn chải mềm và nước ấm, không ngâm giày' },
      { icon: 'block', title: 'Không giặt máy', text: 'Không cho vào máy giặt hoặc máy sấy' },
      { icon: 'wb_shade', title: 'Phơi nơi thoáng', text: 'Phơi nơi râm mát, tránh nắng gắt' },
      { icon: 'inventory_2', title: 'Bảo quản đúng cách', text: 'Nhét giấy vào giày khi cất để giữ form' },
    ],
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 4 — Giày Đá Bóng Puma Ultra                        ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 4,
    cat: 'Giày',
    type: 'Nam / Giày đá bóng',
    tag: 'HOT',
    badge: 'FG/AG PRO',
    brand: 'PUMA',
    name: 'Giày Đá Bóng Puma Ultra',
    rating: 4.6,
    sold: 720,
    price: 2150000,
    oldPrice: 2870000,
    discount: 25,
    images: imgs([
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/108166/03/sv01/fnd/VNM/fmt/png/Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-ULTRA-5-MATCH-FG/AG', // ẢNH 1
       'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/108166/03/fnd/VNM/fmt/png/Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-ULTRA-5-MATCH-FG/AG', // ẢNH 2
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/108166/03/bv/fnd/VNM/fmt/png/Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-ULTRA-5-MATCH-FG/AG', // ẢNH 3
       'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/108166/03/sv04/fnd/VNM/fmt/png/Gi%C3%A0y-b%C3%B3ng-%C4%91%C3%A1-ULTRA-5-MATCH-FG/AG', // ẢNH 4
    ]),
    colors: ['Cam Neon'],
    sizes: SIZES_SHOE,
    voucher: VOUCHER,
    techTitle: 'Thiết Kế Siêu Nhẹ Cho Tốc Độ Tối Đa',
    techText:
      'Puma Ultra mang lại cảm giác bóng tốt nhờ upper mỏng nhẹ, đế FG/AG bám sân cỏ tự nhiên và cỏ nhân tạo. Phù hợp cho các cầu thủ yêu thích lối chơi tốc độ.',
    specs: ['Thương hiệu: PUMA', 'Đế: FG/AG', 'Upper: Synthetic siêu nhẹ', 'Trọng lượng: ~190 g', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: [
      { icon: 'cleaning_services', title: 'Lau sạch sau trận', text: 'Làm sạch bùn đất bằng khăn ẩm sau mỗi trận' },
      { icon: 'block', title: 'Không giặt máy', text: 'Không cho vào máy giặt hoặc máy sấy' },
      { icon: 'wb_shade', title: 'Phơi nơi thoáng', text: 'Phơi nơi râm mát, tránh nắng gắt' },
      { icon: 'inventory_2', title: 'Cất túi riêng', text: 'Để giày khô hẳn rồi mới cất vào túi' },
    ],
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 5 — Quần Đấu Manchester United                     ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 5,
    cat: 'Phụ kiện',
    type: 'Nam / Quần đấu',
    tag: 'MATCHDAY',
    badge: 'MATCHDAY KIT',
    brand: 'PUMA',
    name: 'Quần Đấu Manchester United',
    rating: 4.7,
    sold: 610,
    price: 550000,
    oldPrice: 690000,
    discount: 20,
    images: imgs([
      'https://cdn.hstatic.net/products/200000293662/qu_n_mu_1_b8231aeafa384160896fb2b3baa798ac_1024x1024.jpg', // ẢNH 1
      'https://cdn.hstatic.net/products/200000293662/qu_n_mu_2_077f3ed9156c4035939f624e5e064a05_1024x1024.jpg', // ẢNH 2
      'https://cdn.hstatic.net/products/200000293662/qu_n_mu_3_ca4b4ea7adaf49bbb518c03796faa11b_1024x1024.jpg', // ẢNH 3
      // 'DÁN LINK ẢNH 4 VÀO ĐÂY', // ẢNH 4
    ]),
    colors: ['Xanh'],
    sizes: SIZES_SHIRT,
    voucher: VOUCHER,
    techTitle: 'Nhẹ, Thoáng Và Co Giãn 4 Chiều',
    techText: 'Quần đấu Manchester United đồng bộ với áo Home, chất vải co giãn 4 chiều, lưng thun chắc chắn và dây rút điều chỉnh vừa vặn.',
    specs: ['Thương hiệu: PUMA', 'Chất liệu: Polyester', 'Form: Regular', 'Có dây rút lưng', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 6 — Vớ Tất Thể Thao Manchester United              ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 6,
    cat: 'Phụ kiện',
    type: 'Nam / Phụ kiện',
    tag: 'CHÍNH HÃNG',
    badge: 'OFFICIAL SOCKS',
    brand: 'PUMA',
    name: 'Vớ Tất Thể Thao Manchester United',
    rating: 4.8,
    sold: 1500,
    price: 220000,
    oldPrice: 275000,
    discount: 20,
    images: imgs([
      'https://www.footballshirtculture.com/images/stories/manchester-united-2021-2022-home-kit/manchester_united_2021_2022_home_kit_j.jpeg', // ẢNH 1
       'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7808d953c4374566ac432d83251b4494_9366/Bo_2_DJoi_Tat_Manchester_United_trang_JV5890_41_detail.jpg', // ẢNH 2
       'https://cdn.hstatic.net/products/200000025394/joi_tat_san_nha_manchester_united_mua_giai_25-26_djen_ji7436_41_detail_1644bbdcb97e44a1a7ad6eb44b680f7c_grande.jpg', // ẢNH 3
      'https://img01.ztat.net/article/spp-media-p1/de25e5d9aa724c818d0a05493e48cbeb/2342cbb4854c413bb95e2a00a39b6bdb.jpg?imwidth=762&filter=packshot', // ẢNH 4
    ]),
    colors: ['Đen'],
    sizes: ['M', 'L'],
    voucher: VOUCHER,
    techTitle: 'Êm Chân, Thấm Hút Tốt',
    techText: 'Vớ thể thao dày dặn vừa phải, ôm chân, thấm hút mồ hôi tốt và không tuột gót khi vận động mạnh.',
    specs: ['Thương hiệu: PUMA', 'Chất liệu: Cotton + Spandex', 'Chiều cao: Cổ cao', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 7 — Áo Khoác Man United Pre-Match                  ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 7,
    cat: 'Áo đấu',
    type: 'Nam / Áo khoác',
    tag: 'PRE-MATCH',
    badge: 'PRE-MATCH JACKET',
    brand: 'PUMA',
    name: 'Áo Khoác Man United Pre-Match',
    rating: 4.7,
    sold: 330,
    price: 1250000,
    oldPrice: 1560000,
    discount: 20,
    images: imgs([
      'https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,w=700,h=700,f=webp/pub/media/catalog/product//4/0/4069996986756-1_ra7ocghvvaqrv0sh.jpg', // ẢNH 1
       'https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,w=700,h=700,f=webp/pub/media/catalog/product//4/0/4069996986756-2_weu1iybnk3xxijgz.jpg', // ẢNH 2
       'https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,w=700,h=700,f=webp/pub/media/catalog/product//4/0/4069996986756-3_4dxdshgbalvy3nnm.jpg', // ẢNH 3
       'https://www.classicfootballshirts.co.uk/cdn-cgi/image/fit=pad,q=70,w=700,h=700,f=webp/pub/media/catalog/product//4/0/4069996986756-4_gaftcjb34dnkqybi.jpg', // ẢNH 4
    ]),
    colors: ['Đen Đỏ'],
    sizes: SIZES_SHIRT,
    voucher: VOUCHER,
    techTitle: 'Giữ Ấm Nhẹ, Phong Cách Cầu Thủ',
    techText: 'Áo khoác Pre-Match mang phong cách khởi động của đội bóng, chất liệu nhẹ, chắn gió tốt, có khóa kéo toàn thân và túi hai bên.',
    specs: ['Thương hiệu: PUMA', 'Chất liệu: Polyester', 'Khóa kéo toàn thân', 'Có túi hai bên', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 8 — Giày Đá Bóng Nike Mercurial                    ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 8,
    cat: 'Giày',
    type: 'Nam / Giày đá bóng',
    tag: 'MỚI',
    badge: 'FG/AG SPEED',
    brand: 'NIKE',
    name: 'Nike Air Zoom Mercurial Vapor 16 Academy MG Attack',
    rating: 4.8,
    sold: 410,
    price: 2490000,
    oldPrice: 3200000,
    discount: 22,
    images: imgs([
      'https://cdn.hstatic.net/products/1000061481/avatar__1_of_1__b6637e0da237454a960f68571978ee1e_1024x1024.jpg', // ẢNH 1
       'https://cdn.hstatic.net/products/1000061481/dsc06268_87d2781f762548b4983e04944453ecff_1024x1024.jpg', // ẢNH 2
       'https://cdn.hstatic.net/products/1000061481/dsc06269_8eeb98c880f14e8b882a478976999619_1024x1024.jpg', // ẢNH 3
       'https://cdn.hstatic.net/products/1000061481/dsc06275_dbb19e43727d445589235c89c55878ca_1024x1024.jpg', // ẢNH 4
    ]),
    colors: ['Xanh'],
    sizes: SIZES_SHOE,
    voucher: VOUCHER,
    techTitle: 'Tốc Độ Tối Đa Với Upper Mỏng Nhẹ',
    techText:
      'Nike Mercurial được thiết kế cho những cầu thủ yêu thích tốc độ, upper mỏng ôm chân cho cảm giác bóng tốt và đế FG/AG bám sân cỏ tự nhiên lẫn cỏ nhân tạo.',
    specs: ['Thương hiệu: NIKE', 'Đế: FG/AG', 'Upper: Synthetic siêu nhẹ', 'Trọng lượng: ~200 g', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: [
      { icon: 'cleaning_services', title: 'Lau sạch sau trận', text: 'Làm sạch bùn đất bằng khăn ẩm sau mỗi trận' },
      { icon: 'block', title: 'Không giặt máy', text: 'Không cho vào máy giặt hoặc máy sấy' },
      { icon: 'wb_shade', title: 'Phơi nơi thoáng', text: 'Phơi nơi râm mát, tránh nắng gắt' },
      { icon: 'inventory_2', title: 'Cất túi riêng', text: 'Để giày khô hẳn rồi mới cất vào túi' },
    ],
  },
];

// Thứ tự ưu tiên khi gợi ý phối đồ
const RELATED_ORDER = [5, 6, 7, 4, 8, 2, 3, 1];
const FLASH_SALE_IDS = [1, 3, 2, 4];

@Injectable({ providedIn: 'root' })
export class ProductService {
  products = PRODUCTS;

  getById(id: number): Product | undefined {
    return this.products.find((p) => p.id === id);
  }

  getFlashSale(): Product[] {
    return FLASH_SALE_IDS.map((id) => this.getById(id)!).filter(Boolean);
  }

  getRelated(id: number): Product[] {
    return RELATED_ORDER.filter((x) => x !== id)
      .slice(0, 4)
      .map((x) => this.getById(x)!)
      .filter(Boolean);
  }
}