import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CartService } from './cart.service';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { OrderDialogComponent } from '../order-form/order-form.component';
import { Observable } from 'rxjs';
import { CartItem, Option } from './cart-item.model';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, ItemDetailComponent, OrderDialogComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems$: Observable<CartItem[]>;

  constructor(private cartService: CartService, public dialog: MatDialog) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  getTotalPrice() {
    return this.cartService.getTotalPrice().toFixed(3) + ' TND';
  }

  getOptions(item: CartItem): string {
    return item.options.map(o => o.name).join(', ');
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }

  incrementQuantity(item: CartItem) {
    item.quantity += 1;
    item.totalPrice = (item.price * item.quantity) + this.calculateOptionsPrice(item.options);
    this.cartService.updateItemOptions(item);
  }

  decrementQuantity(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.totalPrice = (item.price * item.quantity) + this.calculateOptionsPrice(item.options);
      this.cartService.updateItemOptions(item);
    }
  }

  calculateOptionsPrice(options: Option[]): number {
    return options.reduce((sum, option) => sum + option.price, 0);
  }

  modifyOptions(item: CartItem) {
    const dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '600px',
      data: { ...item }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cartService.updateItemOptions(result);
      }
    });
  }

  openOrderDialog() {
    this.cartItems$.subscribe(cartItems => {
      const dialogRef = this.dialog.open(OrderDialogComponent, {
        width: '400px',
        data: {
          orderDetails: cartItems,
          total: this.cartService.getTotalPrice()
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Order confirmed:', result);
          // Process the order
        }
      });
    
    });
  
}}
