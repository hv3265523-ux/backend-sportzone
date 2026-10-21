import { Injectable, computed, signal } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color?: string;
  size?: string;
}

// Giỏ hàng dùng chung cho mọi trang
@Injectable({ providedIn: 'root' })
export class CartService {
  items = signal<CartItem[]>([]);
  count = computed(() => this.items().reduce((sum, i) => sum + i.quantity, 0));

  add(item: CartItem) {
    this.items.update((list) => {
      const idx = list.findIndex(
        (x) => x.id === item.id && x.size === item.size && x.color === item.color,
      );
      if (idx === -1) return [...list, item];
      const copy = [...list];
      copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + item.quantity };
      return copy;
    });
    console.log('Giỏ hàng:', this.items());
  }
}