import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Address {
  id: number;
  label: string;
  badge: string;
  name: string;
  phone: string;
  detail: string;
  meta: string;
  isDefault: boolean;
  icon: string;
}

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  private fb = inject(FormBuilder);

  menu = [
    { label: 'Hồ sơ cá nhân', icon: 'badge', link: '/account', pill: '', pillClass: '', dot: false },
    { label: 'Quản lý đơn hàng', icon: 'inventory_2', link: '/account/orders', pill: '2 đang giao', pillClass: 'blue', dot: false },
    { label: 'Sổ địa chỉ nhận hàng', icon: 'location_on', link: '/account/addresses', pill: '2 địa chỉ', pillClass: 'soft', dot: false },
    { label: 'Voucher & Ưu đãi', icon: 'confirmation_number', link: '/account/vouchers', pill: '3 mã mới', pillClass: 'brown', dot: false },
    { label: 'Sản phẩm yêu thích', icon: 'favorite', link: '/account/wishlist', pill: '8 món', pillClass: 'soft', dot: false },
    { label: 'Thông báo hệ thống', icon: 'notifications', link: '/account/notifications', pill: '', pillClass: '', dot: true },
  ];

  addresses: Address[] = [
    {
      id: 1,
      label: 'Nhà riêng',
      badge: 'MẶC ĐỊNH',
      name: 'Vũ Anh Hoàng',
      phone: '0912 345 678',
      detail: 'Tầng 6, Tháp Thể Thao SportZone, 128 Cầu Giấy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội.',
      meta: 'MÃ BƯU CHÍNH: 100000 | VẬN CHUYỂN TIÊU CHUẨN SPORTZONE EXPRESS (2-4H)',
      isDefault: true,
      icon: 'home',
    },
    {
      id: 2,
      label: 'Văn phòng làm việc',
      badge: 'PHỤ',
      name: 'Vũ Anh Hoàng',
      phone: '0988 765 432',
      detail: 'Tòa nhà FPT Tower, Số 10 Phạm Văn Bạch, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội.',
      meta: 'MÃ BƯU CHÍNH: 100000 | GIAO GIỜ HÀNH CHÍNH (8H30 - 17H30)',
      isDefault: false,
      icon: 'apartment',
    },
  ];

  componentTree = [
    { name: 'AccountLayout.jsx', note: 'Parent Wrapper' },
    { name: 'AccountSidebar.jsx', note: 'Nav & Status' },
    { name: 'UserProfileForm.jsx', note: 'Profile & Pass' },
    { name: 'AddressBook.jsx', note: 'Grid Address Cards' },
    { name: 'AddressModal.jsx', note: 'Create / Update Flow' },
  ];

  codeSample = `// SportZone Core Profile & Address Service API
export const userService = {
  getProfile: () => api.get('/api/v1/user/profile'),
  updateProfile: (data) => api.patch('/api/v1/user/profile', data),
  changePassword: (payload) => api.post('/api/v1/user/change-password', payload)
};

export const addressService = {
  getAddresses: () => api.get('/api/v1/user/addresses'),
  addAddress: (data) => api.post('/api/v1/user/addresses', data),
  updateAddress: (id, addressData) => api.put(\`/api/v1/user/addresses/\${id}\`, addressData),
  deleteAddress: (id) => api.delete(\`/api/v1/user/addresses/\${id}\`),
  setDefaultAddress: (id) => api.patch(\`/api/v1/user/addresses/\${id}/default\`)
};`;

  showPassword = false;
  saved = false;

  private readonly profileDefaults = {
    fullName: 'Vũ Anh Hoàng',
    email: 'anhhoang.vu@sportzone.vn',
    phone: '0912 345 678',
    birthday: '1996-08-15',
    gender: 'male',
  };

  profileForm = this.fb.group({
    fullName: [this.profileDefaults.fullName, [Validators.required, Validators.minLength(2)]],
    email: [{ value: this.profileDefaults.email, disabled: true }],
    phone: [this.profileDefaults.phone, [Validators.required, Validators.pattern(/^0[\d\s]{9,12}$/)]],
    birthday: [this.profileDefaults.birthday],
    gender: [this.profileDefaults.gender],
  });

  passwordForm = this.fb.group({
    current: ['', Validators.required],
    next: ['', [Validators.required, Validators.minLength(8)]],
    confirm: ['', Validators.required],
  });

  get strength(): { label: string; level: number } {
    const v = this.passwordForm.value.next || '';
    let score = 0;
    if (v.length >= 8) score++;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) score++;
    if (/\d/.test(v)) score++;
    if (/[^A-Za-z0-9]/.test(v)) score++;
    const labels = ['Rất yếu', 'Yếu', 'Trung bình', 'Khá', 'Mạnh'];
    return { label: labels[score], level: score };
  }

  get passwordMismatch(): boolean {
    const { next, confirm } = this.passwordForm.value;
    return !!confirm && next !== confirm;
  }

  resetProfile(): void {
    this.profileForm.reset(this.profileDefaults);
  }

  saveProfile(): void {
    if (this.profileForm.invalid) {
      this.profileForm.markAllAsTouched();
      return;
    }
    this.saved = true;
    setTimeout(() => (this.saved = false), 2500);
  }

  changePassword(): void {
    if (this.passwordForm.invalid || this.passwordMismatch) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    this.passwordForm.reset();
  }

  setDefault(id: number): void {
    this.addresses = this.addresses.map(a => ({
      ...a,
      isDefault: a.id === id,
      badge: a.id === id ? 'MẶC ĐỊNH' : 'PHỤ',
    }));
  }

  removeAddress(id: number): void {
    this.addresses = this.addresses.filter(a => a.id !== id);
  }
}