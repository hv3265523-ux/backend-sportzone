import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  imports: [RouterLink],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private cart = inject(CartService);
  private catalog = inject(ProductService);

  // Ảnh xám dùng khi ảnh bị lỗi
  fallback =
    'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22%23e5e7eb%22/%3E%3C/svg%3E';

  product: Product = this.catalog.products[0];
  related: Product[] = [];
  mainImage = '';
  selectedColor = '';
  selectedSize = '';
  quantity = 1;
  activeTab = 'mota'; // mota | thongso | danhgia
  liked = false;
  useVoucher = false;
  message = '';

  constructor() {
    this.load(this.product);

    // Mỗi lần id trên đường dẫn đổi thì tải lại sản phẩm
    this.route.paramMap.subscribe((params) => {
      const found = this.catalog.getById(Number(params.get('id')));
      if (!found) {
        this.router.navigateByUrl('/'); // id không tồn tại -> về trang chủ
        return;
      }
      this.load(found);
      this.cdr.markForCheck();
    });
  }

  private load(p: Product) {
    this.product = p;
    this.related = this.catalog.getRelated(p.id);
    this.mainImage = p.images[0];
    this.selectedColor = p.colors[0];
    this.selectedSize = p.sizes[Math.floor(p.sizes.length / 2)]; // size ở giữa
    this.quantity = 1;
    this.activeTab = 'mota';
    this.liked = false;
    this.useVoucher = false;
    this.message = '';
  }

  // Hiện giá dạng 1.420.000
  fmt(n: number) {
    return n.toLocaleString('vi-VN');
  }

  // Tạo mảng để vẽ số sao
  stars(n: number) {
    return Array(n).fill(0);
  }

  // Ảnh lỗi thì thay bằng ô xám
  onImgError(event: Event) {
    (event.target as HTMLImageElement).src = this.fallback;
  }

  increase() {
    this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (!this.selectedSize) {
      this.message = 'Vui lòng chọn size!';
      return false;
    }
    this.cart.add({
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      color: this.selectedColor,
      size: this.selectedSize,
      quantity: this.quantity,
    });
    this.message = 'Đã thêm vào giỏ hàng!';
    return true;
  }

  buyNow() {
    if (this.addToCart()) {
      this.message = 'Đang chuyển sang thanh toán...'; // Sau này: this.router.navigate(['/thanh-toan'])
    }
  }

  addRelated(p: Product) {
    this.cart.add({ id: p.id, name: p.name, price: p.price, quantity: 1 });
    this.message = 'Đã thêm "' + p.name + '" vào giỏ!';
  }
}