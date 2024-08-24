import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItems.asObservable();

  addItem(item: CartItem) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(i => i.name === item.name);

    if (itemIndex > -1) {
      currentItems[itemIndex].quantity += item.quantity;
      currentItems[itemIndex].options = item.options;
      currentItems[itemIndex].totalPrice = item.totalPrice;
    } else {
      currentItems.push(item);
    }

    this.cartItems.next(currentItems);
  }

  removeItem(item: CartItem) {
    const currentItems = this.cartItems.value.filter(i => i.name !== item.name);
    this.cartItems.next(currentItems);
  }

  updateItemOptions(updatedItem: CartItem) {
    const currentItems = this.cartItems.value.map(item => {
      if (item.name === updatedItem.name) {
        return updatedItem;
      }
      return item;
    });
    this.cartItems.next(currentItems);
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => total + item.totalPrice, 0);
  }
}
