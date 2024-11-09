import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CartItem } from '../cart/cart-item.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [
      CommonModule,
      FormsModule,
      MatDialogModule
  ],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'] // Correction: Utilisez 'styleUrls' au lieu de 'styleUrl'
})
export class OrderDialogComponent {
  diningOption: string = 'onSite';

  constructor(
    public dialogRef: MatDialogRef<OrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderDetails: CartItem[], total: number },
    private router: Router,
    private orderService: OrderService
  ) {}

  confirmOrder() {
    const orderData = {
      details: this.data.orderDetails,
      total: this.data.total,
      diningOption: this.diningOption
    };
    
    // Utilisation correcte des données injectées
    this.orderService.setOrderDetails(this.data.orderDetails, this.data.total);
    console.log('Order confirmed', orderData);
    
    this.dialogRef.close(orderData);

    if (this.diningOption == 'onSite') {
      this.router.navigate(['/ecommerce-page/cart']);
    } else if (this.diningOption == 'delivery') {
      this.router.navigate(['/delivery-details']);
    }
  }
}
