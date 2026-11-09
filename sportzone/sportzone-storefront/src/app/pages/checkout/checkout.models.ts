// ============================================================
//  Kiểu dữ liệu + luật tính tiền dùng chung cho trang Thanh toán
// ============================================================

export type ShippingMethodId = 'standard' | 'express';
export type PaymentMethodId = 'cod' | 'vnpay' | 'momo' | 'zalopay';
export type AddressLabel = 'home' | 'office';

/** Một dòng trong giỏ hàng */
export interface CartItem {
  id: string | number;
  name: string;
  image: string;
  /** Ví dụ: "Size: L · Xanh Da Trời" */
  variant?: string;
  /** Nhãn nhỏ dưới tên, ví dụ: "MARATHON CHUẨN THI ĐẤU" */
  badge?: string;
  unitPrice: number;
  /** Giá gốc (nếu đang giảm giá) – dùng để gạch ngang và tính "Tiết kiệm" */
  originalPrice?: number;
  quantity: number;
  /** In tên / số áo. fee là phí cho MỖI sản phẩm. */
  customization?: { label: string; fee: number };
}

export interface Voucher {
  code: string;
  description: string;
  /** Số tiền được giảm (đã tính xong) */
  discount: number;
}

export interface SavedAddress {
  fullName: string;
  phone: string;
  email: string;
  province: string;
  district: string;
  ward: string;
  addressDetail: string;
}

/** Dữ liệu gửi lên server khi đặt hàng */
export interface OrderPayload {
  customer: { fullName: string; phone: string; email: string };
  address: {
    label: AddressLabel;
    province: string;
    district?: string;
    ward: string;
    detail: string;
  };
  note: string;
  shippingMethod: ShippingMethodId;
  paymentMethod: PaymentMethodId;
  voucherCode: string | null;
  items: {
    id: string | number;
    name: string;
    variant?: string;
    quantity: number;
    unitPrice: number;
    customizationLabel?: string;
    customizationFee?: number;
  }[];
  /** Chỉ để hiển thị. Server PHẢI tự tính lại, không tin số này. */
  totals: {
    subtotal: number;
    customizationFee: number;
    shippingFee: number;
    voucherDiscount: number;
    paymentDiscount: number;
    total: number;
  };
}

export interface OrderResult {
  orderCode: string;
  /** Có giá trị khi thanh toán online: trang sẽ chuyển hướng tới link này */
  paymentUrl?: string;
}

/** Ảnh chụp đơn hàng vừa đặt, để hiện ở màn hình "Hoàn tất" */
export interface PlacedOrder {
  code: string;
  total: number;
  itemCount: number;
  fullName: string;
  email: string;
  address: string;
  shippingLabel: string;
  paymentLabel: string;
  paymentPending: boolean;
}

/** Luật tính tiền – đổi số ở đây là cả trang đổi theo */
export const CHECKOUT_RULES = {
  /** Đơn từ mức này trở lên được miễn phí giao tiêu chuẩn */
  freeShippingMin: 500_000,
  standardFee: 35_000,
  expressFee: 35_000,
  /** Giảm khi thanh toán bằng VNPAY */
  vnpayDiscount: 20_000,
/** Giao hỏa tốc chỉ áp dụng ở các thành phố này (so khớp chữ thường) */
  expressCities: ['hà nội', 'hồ chí minh'],
  noteMaxLength: 150,
} as const;