import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
interface OrderDetail {
  name: string;
  quantity: number;
  price: number;
  totalPrice: number;
}

@Component({
  selector: 'app-discount-dialog-total',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MatDialogModule,
  ],  
  templateUrl: './discount-dialog-total.component.html',
  styleUrls: ['./discount-dialog-total.component.scss'],
})
export class DiscountDialogTotalComponent {
  displayedColumns: string[] = ['name', 'quantity', 'price', 'totalPrice', 'action'];
  orderDetails: OrderDetail[] = [];

  constructor(
    public dialogRef: MatDialogRef<DiscountDialogTotalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { orderDetails: OrderDetail[] }
  ) {
    console.log('Order details in dialog:', data.orderDetails); // Vérifiez ici
    this.orderDetails = data.orderDetails;
  }
  
  applyBuy1Get1Free(): void {
    this.orderDetails.forEach(item => {
      if (item.quantity >= 2) {
        item.totalPrice -= item.price; // Buy 1 Get 1 Free logic
      }
    });
    this.updateTotal();
  }
  
  applyBuy2Get1Free(): void {
    this.orderDetails.forEach(item => {
      if (item.quantity >= 3) {
        item.totalPrice -= item.price; // Buy 2 Get 1 Free logic
      }
    });
    this.updateTotal();
  }
  
  apply20PercentOff(): void {
    this.orderDetails.forEach(item => {
      item.totalPrice *= 0.80; // Apply 20% discount
    });
    this.updateTotal();
  }
  
  updateTotal(): void {
    const newTotal = this.orderDetails.reduce((acc, item) => acc + item.totalPrice, 0);
    console.log('New total after discount:', newTotal);  // Log pour vérifier
    // Si vous avez un mécanisme pour renvoyer ce total au parent, ajoutez-le ici
  }
  
  removeDiscount(item: OrderDetail): void {
    item.totalPrice = item.quantity * item.price; // Reset to original total
  }

  onSave(): void {
    this.dialogRef.close(this.orderDetails); // Close and return the updated details
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
