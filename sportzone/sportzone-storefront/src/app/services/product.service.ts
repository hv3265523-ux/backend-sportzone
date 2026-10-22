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

// ẢNH DÙNG FILE RIÊNG (không dùng link nữa)
// Để file ảnh vào thư mục: public/images/
// Trong code chỉ ghi TÊN FILE (vd 'sp1.png'), đường dẫn tự thêm vào.
const IMG_PATH = 'images/';

// Mỗi sản phẩm có 4 ô ảnh: ảnh 1 (ảnh lớn + ô nhỏ đầu), ảnh 2, ảnh 3, ảnh 4.
// Ô nào chưa có file thì tự dùng lại ảnh 1.
const imgs = (src: string | string[]) => {
  const list = (Array.isArray(src) ? src : [src]).filter(Boolean).map((f) => IMG_PATH + f.trim());
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
      'sp1.png', // ẢNH 1
      'sp1,do2.png', // ẢNH 2
      'sp3,trang1.png', // ẢNH 3
      'sp1,trang2.webp', // ẢNH 4
    ]),
    colors: ['Đỏ', 'Trắng'],
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
    name: 'ÁO BÓNG ĐÁ BỒ ĐÀO NHA WC2026',
    rating: 4.7,
    sold: 860,
    price: 1190000,
    oldPrice: 1700000,
    discount: 30,
    images: imgs([
      'SP2.png', // ẢNH 1
      'sp2 xanh2.png', // ẢNH 2
      'sp2 do,1.png', // ẢNH 3
      'sp2 do,2.png', // ẢNH 4
    ]),
    colors: ['Xanh Lá', 'Đỏ'],
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
      'sp3-1.png', // ẢNH 1
      'sp3-2.png', // ẢNH 2
      'sp3-3.png', // ẢNH 3
      'sp3-4.png', // ẢNH 4
    ]),
    colors: ['Xanh Lime', 'Cam'],
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
      'sp4-1.png', // ẢNH 1
      'sp4-2.png', // ẢNH 2
      'sp4-3.png', // ẢNH 3
      'sp4-4.png', // ẢNH 4
    ]),
    colors: ['Trắng', 'Xanh Đen'],
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
      'sp5-1.png', // ẢNH 1
      'sp5-2.png', // ẢNH 2
      'sp5-3.png', // ẢNH 3
      'sp5-4.png', // ẢNH 4 (chưa có thì để vậy, tự dùng lại ảnh 1)
    ]),
    colors: [ 'Đen','Đen Trắng','Trắng Đen','Trắng Đỏ'],
    sizes: SIZES_SHIRT,
    voucher: VOUCHER,
    techTitle: 'Nhẹ, Thoáng Và Co Giãn 4 Chiều',
    techText: 'Quần đấu Manchester United đồng bộ với áo Home, chất vải co giãn 4 chiều, lưng thun chắc chắn và dây rút điều chỉnh vừa vặn.',
    specs: ['Thương hiệu: PUMA', 'Chất liệu: Polyester', 'Form: Regular', 'Có dây rút lưng', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 6 — Vớ Tất Thể Thao          ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 6,
    cat: 'Phụ kiện',
    type: 'Nam / Phụ kiện',
    tag: 'CHÍNH HÃNG',
    badge: 'OFFICIAL SOCKS',
    brand: 'PUMA',
    name: 'Vớ Tất Thể Thao ',
    rating: 4.8,
    sold: 1500,
    price: 220000,
    oldPrice: 275000,
    discount: 20,
    images: imgs([
      'sp6-1.png', // ẢNH 1
      'sp6-2.png', // ẢNH 2
      'sp6-3.png', // ẢNH 3
      'sp6-4.png', // ẢNH 4
    ]),
    colors: ['Đen', 'Trắng','Xanh', 'Vàng'],
    sizes: ['M', 'L'],
    voucher: VOUCHER,
    techTitle: 'Êm Chân, Thấm Hút Tốt',
    techText: 'Vớ thể thao dày dặn vừa phải, ôm chân, thấm hút mồ hôi tốt và không tuột gót khi vận động mạnh.',
    specs: ['Thương hiệu: PUMA', 'Chất liệu: Cotton + Spandex', 'Chiều cao: Cổ cao', 'Xuất xứ: Việt Nam'],
    reviews: REVIEWS,
    care: CARE,
  },

  // ╔══════════════════════════════════════════════════════════════╗
  // ║  SẢN PHẨM 7 — Áo Khoác Man United                  ║
  // ╚══════════════════════════════════════════════════════════════╝
  {
    id: 7,
    cat: 'Áo đấu',
    type: 'Nam / Áo khoác',
    tag: 'PRE-MATCH',
    badge: 'PRE-MATCH JACKET',
    brand: 'PUMA',
    name: 'Áo Khoác Man United ',
    rating: 4.7,
    sold: 330,
    price: 1250000,
    oldPrice: 1560000,
    discount: 20,
    images: imgs([
      'sp7-1.png', // ẢNH 1
      'sp7-2.png', // ẢNH 2
      'sp7-3.png', // ẢNH 3
      'sp7-4.png', // ẢNH 4
    ]),
    colors: ['Tím', 'Đỏ', 'Trắng', 'Xanh'],
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
      'sp8-1.png', // ẢNH 1
      'sp8-2.png', // ẢNH 2
      'sp8-3.png', // ẢNH 3
      'sp8-4.png', // ẢNH 4
    ]),
    colors: ['Xanh', 'Hồng'],
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