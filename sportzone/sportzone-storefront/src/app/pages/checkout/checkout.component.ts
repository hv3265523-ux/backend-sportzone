import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  AddressLabel,
  CartItem,
  CHECKOUT_RULES,
  OrderPayload,
  PaymentMethodId,
  PlacedOrder,
  ShippingMethodId,
  Voucher,
} from './checkout.models';
import { calcTotals, canUseExpress, formatVnd } from './checkout.utils';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  readonly rules = CHECKOUT_RULES;
  readonly vnd = formatVnd;

  // Dữ liệu giả (sau này lấy từ giỏ hàng thật)
  items = signal<CartItem[]>([
    {
      id: 1,
      name: 'Áo Đấu Manchester City Home 24/25',
      image: '',
      variant: 'Size: L · Xanh Da Trời',
      unitPrice: 1_040_000,
      quantity: 1,
      customization: { label: 'In áo: HAALAND - 9 (+150k)', fee: 150_000 },
    },
    {
      id: 2,
      name: 'Giày Chạy Bộ Nam Nike ZoomX Vaporfly 3',
      image: '',
      variant: 'Size: 42 EU · Xanh / Trắng',
      badge: 'MARATHON CHUẨN THI ĐẤU',
      unitPrice: 2_700_000,
      originalPrice: 3_440_000,
      quantity: 1,
    },
  ]);

  voucher = signal<Voucher | null>({
    code: 'SPORT100K',
    description: 'Giảm ngay 100.000đ cho đơn đồ đấu',
    discount: 100_000,
  });

  // Dữ liệu người dùng nhập
  fullName = signal('');
  phone = signal('');
  email = signal('');
  province = signal('');
  district = signal('');
  ward = signal('');
  addressDetail = signal('');
  note = signal('');
  addressLabel = signal<AddressLabel>('home');
  shippingMethod = signal<ShippingMethodId>('standard');
  paymentMethod = signal<PaymentMethodId>('cod');
  agreed = signal(false);

  // Trạng thái trang
  tried = signal(false);
  placedOrder = signal<PlacedOrder | null>(null);

  // Giá trị tự tính
  expressAllowed = computed(() => canUseExpress(this.province()));

  shipping = computed<ShippingMethodId>(() =>
    this.shippingMethod() === 'express' && !this.expressAllowed()
      ? 'standard'
      : this.shippingMethod(),
  );

  totals = computed(() =>
    calcTotals(this.items(), this.shipping(), this.paymentMethod(), this.voucher()),
  );

  itemCount = computed(() => this.items().reduce((s, i) => s + i.quantity, 0));

  // Kiểm tra dữ liệu
  errors = computed(() => ({
    fullName: this.fullName().trim() ? '' : 'Vui lòng nhập họ và tên',
    phone: /^(0|\+84)\d{9}$/.test(this.phone().trim())
      ? ''
      : 'Số điện thoại chưa đúng (VD: 0912345678)',
    email: /^\S+@\S+\.\S+$/.test(this.email().trim()) ? '' : 'Email chưa đúng',
    province: this.province().trim() ? '' : 'Vui lòng nhập tỉnh/thành phố',
    district: this.district().trim() ? '' : 'Vui lòng nhập quận/huyện',
    ward: this.ward().trim() ? '' : 'Vui lòng nhập phường/xã',
    addressDetail: this.addressDetail().trim() ? '' : 'Vui lòng nhập địa chỉ chi tiết',
    agreed: this.agreed() ? '' : 'Bạn cần đồng ý điều khoản để đặt hàng',
  }));

  isValid = computed(() => Object.values(this.errors()).every((e) => e === ''));

  placeOrder(): void {
    this.tried.set(true);
    if (!this.isValid()) return;

    const t = this.totals();

    const payload: OrderPayload = {
      customer: {
        fullName: this.fullName().trim(),
        phone: this.phone().trim(),
        email: this.email().trim(),
      },
      address: {
        label: this.addressLabel(),
        province: this.province().trim(),
        district: this.district().trim(),
        ward: this.ward().trim(),
        detail: this.addressDetail().trim(),
      },
      note: this.note().trim(),
      shippingMethod: this.shipping(),
      paymentMethod: this.paymentMethod(),
      voucherCode: this.voucher()?.code ?? null,
      items: this.items().map((i) => ({
        id: i.id,
        name: i.name,
        variant: i.variant,
        quantity: i.quantity,
        unitPrice: i.unitPrice,
        customizationLabel: i.customization?.label,
        customizationFee: i.customization?.fee,
      })),
      totals: {
        subtotal: t.subtotal,
        customizationFee: t.customizationFee,
        shippingFee: t.shippingFee,
        voucherDiscount: t.voucherDiscount,
        paymentDiscount: t.paymentDiscount,
        total: t.total,
      },
    };

    // TODO: khi có API thì gọi checkout.service ở đây
    console.log('Dữ liệu gửi lên server:', payload);

    const shippingLabels: Record<ShippingMethodId, string> = {
      standard: 'Giao hàng tiêu chuẩn',
      express: 'SportZone Express (2H)',
    };
    const paymentLabels: Record<PaymentMethodId, string> = {
      cod: 'Thanh toán khi nhận hàng (COD)',
      vnpay: 'Cổng VNPAY',
      momo: 'Ví điện tử MoMo',
      zalopay: 'Ví điện tử ZaloPay',
    };

    this.placedOrder.set({
      code: 'SZ' + Date.now().toString().slice(-8),
      total: t.total,
      itemCount: this.itemCount(),
      fullName: payload.customer.fullName,
      email: payload.customer.email,
      address: `${payload.address.detail}, ${payload.address.ward}, ${payload.address.district}, ${payload.address.province}`,
      shippingLabel: shippingLabels[payload.shippingMethod],
      paymentLabel: paymentLabels[payload.paymentMethod],
      paymentPending: payload.paymentMethod !== 'cod',
    });
  }
}