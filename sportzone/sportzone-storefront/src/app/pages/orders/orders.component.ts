import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';
import { formatVnd } from '../checkout/checkout.utils';

export type OrderStatus = 'pending' | 'preparing' | 'shipping' | 'delivered' | 'cancelled';

// Mỗi dòng trong đơn chỉ lưu mã sản phẩm, còn tên/giá/ảnh lấy từ ProductService
interface OrderLine {
  productId: number;
  size: string;
  color: string;
  qty: number;
}

interface Order {
  code: string;
  date: string;
  status: OrderStatus;
  note: string;
  lines: OrderLine[];
  discount: number;
  payment: string;
}

@Component({
  selector: 'app-orders',
  imports: [FormsModule, RouterLink],
  templateUrl: './orders.component.html',
})
export class OrdersComponent {
  private cart = inject(CartService);
  private router = inject(Router);
  private productService = inject(ProductService);
  readonly vnd = formatVnd;

  tabs: { id: 'all' | OrderStatus; label: string }[] = [
    { id: 'all', label: 'Tất cả' },
    { id: 'pending', label: 'Chờ xác nhận' },
    { id: 'preparing', label: 'Chuẩn bị hàng' },
    { id: 'shipping', label: 'Đang giao' },
    { id: 'delivered', label: 'Đã giao' },
    { id: 'cancelled', label: 'Đã hủy' },
  ];

  statusInfo: Record<OrderStatus, { label: string; cls: string }> = {
    pending: { label: 'Chờ xác nhận', cls: 'bg-yellow-100 text-yellow-800' },
    preparing: { label: 'Đang chuẩn bị hàng', cls: 'bg-orange-100 text-orange-700' },
    shipping: { label: 'Đang giao hàng', cls: 'bg-blue-900 text-white' },
    delivered: { label: 'Đã giao thành công', cls: 'bg-blue-100 text-blue-800' },
    cancelled: { label: 'Đã hủy', cls: 'bg-gray-200 text-gray-600' },
  };

  // Dữ liệu giả (sau này lấy từ API). productId phải khớp id trong ProductService
  orders = signal<Order[]>([
    {
      code: 'SZ-84920',
      date: '05/11/2026 14:30',
      status: 'shipping',
      note: 'SportZone Express 2H',
      discount: 100_000,
      payment: 'Đã thanh toán qua VNPAY-QR (Đã áp mã voucher -100k)',
      lines: [
        { productId: 1, size: 'L', color: 'Đỏ', qty: 1 },
        { productId: 3, size: '42', color: 'Xanh Lime', qty: 1 },
      ],
    },
    {
      code: 'SZ-84815',
      date: '04/11/2026 09:15',
      status: 'preparing',
      note: 'Giao hàng tiêu chuẩn SportZone',
      discount: 0,
      payment: 'Thanh toán khi nhận hàng (COD) • Miễn phí vận chuyển VIP',
      lines: [{ productId: 8, size: '42', color: 'Xanh', qty: 1 }],
    },
    {
      code: 'SZ-84500',
      date: '03/11/2026 20:05',
      status: 'pending',
      note: 'Giao hàng tiêu chuẩn SportZone',
      discount: 0,
      payment: 'Thanh toán khi nhận hàng (COD)',
      lines: [{ productId: 6, size: 'M', color: 'Đen', qty: 2 }],
    },
    {
      code: 'SZ-84102',
      date: '28/10/2026 11:20',
      status: 'delivered',
      note: 'Đã ký nhận bởi: Hoàng',
      discount: 0,
      payment: 'Đã thanh toán qua MoMo',
      lines: [{ productId: 2, size: 'M', color: 'Xanh Lá', qty: 1 }],
    },
    {
      code: 'SZ-83977',
      date: '20/10/2026 16:40',
      status: 'cancelled',
      note: 'Đơn đã hủy theo yêu cầu',
      discount: 0,
      payment: 'Thanh toán khi nhận hàng (COD)',
      lines: [{ productId: 7, size: 'L', color: 'Tím', qty: 1 }],
    },
  ]);

  activeTab = signal<'all' | OrderStatus>('all');
  keyword = signal('');

  // Tra sản phẩm từ ProductService theo mã
  productOf(id: number): Product {
    return this.productService.getById(id)!;
  }

  filtered = computed(() => {
    const tab = this.activeTab();
    const kw = this.keyword().trim().toLowerCase();
    return this.orders().filter((o) => {
      const okTab = tab === 'all' || o.status === tab;
      const okKw =
        !kw ||
        o.code.toLowerCase().includes(kw) ||
        o.lines.some((l) => this.productOf(l.productId).name.toLowerCase().includes(kw));
      return okTab && okKw;
    });
  });

  countOf(tab: 'all' | OrderStatus): number {
    return tab === 'all'
      ? this.orders().length
      : this.orders().filter((o) => o.status === tab).length;
  }

  // Tổng tiền = tổng (giá sản phẩm x số lượng) - giảm giá
  totalOf(o: Order): number {
    return (
      o.lines.reduce((s, l) => s + this.productOf(l.productId).price * l.qty, 0) - o.discount
    );
  }

  cancelOrder(code: string): void {
    this.orders.update((list) =>
      list.map((o) => (o.code === code ? { ...o, status: 'cancelled' as OrderStatus } : o)),
    );
  }

  // Mua lại: thêm sản phẩm vào giỏ chung rồi sang trang thanh toán
  rebuy(o: Order): void {
    o.lines.forEach((l) => {
      const p = this.productOf(l.productId);
      this.cart.add({
        id: p.id,
        name: p.name,
        price: p.price,
        quantity: l.qty,
        size: l.size,
        color: l.color,
      });
    });
    this.router.navigate(['/checkout']);
  }
}