import {
  CartItem,
  CHECKOUT_RULES,
  OrderPayload,
  PaymentMethodId,
  ShippingMethodId,
  Voucher,
} from './checkout.models';

/** 3790000 -> "3.790.000đ" */
export function formatVnd(n: number): string {
  return n.toLocaleString('vi-VN') + 'đ';
}

/** Giao hỏa tốc chỉ có ở Hà Nội và Hồ Chí Minh */
export function canUseExpress(province: string): boolean {
  const p = province.trim().toLowerCase();
  return CHECKOUT_RULES.expressCities.some((city) => p.includes(city));
}

export type CheckoutTotals = OrderPayload['totals'] & { saved: number };

export function calcTotals(
  items: CartItem[],
  shipping: ShippingMethodId,
  payment: PaymentMethodId,
  voucher: Voucher | null,
): CheckoutTotals {
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);

  const customizationFee = items.reduce(
    (sum, i) => sum + (i.customization?.fee ?? 0) * i.quantity,
    0,
  );

  const saved = items.reduce(
    (sum, i) => sum + ((i.originalPrice ?? i.unitPrice) - i.unitPrice) * i.quantity,
    0,
  );

  let shippingFee: number;
  if (shipping === 'express') {
    shippingFee = CHECKOUT_RULES.expressFee;
  } else {
    shippingFee =
      subtotal >= CHECKOUT_RULES.freeShippingMin ? 0 : CHECKOUT_RULES.standardFee;
  }

  const voucherDiscount = voucher?.discount ?? 0;
  const paymentDiscount = payment === 'vnpay' ? CHECKOUT_RULES.vnpayDiscount : 0;

  const total = Math.max(
    0,
    subtotal + customizationFee + shippingFee - voucherDiscount - paymentDiscount,
  );

  return {
    subtotal,
    customizationFee,
    shippingFee,
    voucherDiscount,
    paymentDiscount,
    total,
    saved,
  };
}