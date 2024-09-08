import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { MatIcon } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DiscountDialogComponent } from '../discount-dialog/discount-dialog.component';
import { DiscountDialogTotalComponent } from '../discount-dialog-total/discount-dialog-total.component';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../../dashboard/crm/order-form/order.service';
import { PaymentMethodDialogComponent } from '../payment-method-dialog/payment-method-dialog.component';

interface OrderDetail {
    name: string;  // Remplacez 'product' par 'name'
    quantity?: number;
    price?: number;
    totalPrice: number;
    image?: string;
  }
 
@Component({
  selector: 'app-e-cart',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    NgIf,
    FeathericonsModule,
    MatIcon,
  ],
  templateUrl: './e-cart.component.html',
  styleUrls: ['./e-cart.component.scss'],
})
export class ECartComponent {
  showMore = false;

  displayedColumns: string[] = ['product', 'price', 'quantity', 'total', 'action'];
  dataSource = new MatTableDataSource<OrderDetail>([]);
  total: number = 0;
  discount: number = 0;
  grandTotal: number = this.total;
  orderDetails: OrderDetail[] = [];  // Déclarez la propriété orderDetails ici
  constructor(public dialog: MatDialog, private orderService: OrderService) {
    
  }

  ngOnInit() {
    this.orderService.getOrderDetails().subscribe((details) => {
      console.log('Order Details:', details);
      this.dataSource.data = details;
      this.calculateTotal();  
    });

    this.orderService.getTotal().subscribe((total) => {
      console.log('Total:', total);
      this.total = total;
      this.calculateGrandTotal();
    });
  }

  removeItem(item: OrderDetail) {
    const index = this.dataSource.data.indexOf(item);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource._updateChangeSubscription();
      this.total = this.dataSource.data.reduce((acc, curr) => acc + curr.totalPrice, 0);
      this.orderService.setOrderDetails(this.dataSource.data, this.total);
    }
  }

  toggleMore() {
    this.showMore = !this.showMore;
  }

  openDiscountDialog(): void {
    const dialogRef = this.dialog.open(DiscountDialogComponent, {
      width: 'fit-content',  // Auto adjust width based on content
      height: 'fit-content', // Auto adjust height based on content
      maxHeight: '90vh', // Limit height to prevent overflow
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result && result.valid) {
        this.discount = this.total * result.discount;
        this.calculateGrandTotal();
      }
    });
  }

 

  calculateGrandTotal(): void {
    this.grandTotal = this.total - this.discount;
  }
  openDiscountTotalDialog(): void {
    console.log('Order details before opening dialog:', this.dataSource.data);
    const dialogRef = this.dialog.open(DiscountDialogTotalComponent, {
      width: '600px',
      data: { orderDetails: this.dataSource.data },
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = result;
        this.calculateTotal();
        this.orderService.setOrderDetails(this.dataSource.data, this.total);
      }
    });
  }
  

  calculateTotal(): void {
    this.total = this.dataSource.data.reduce((acc, item) => acc + item.totalPrice, 0);
  }
  openPaymentMethodDialog(): void {
    const dialogRef = this.dialog.open(PaymentMethodDialogComponent, {
      width: '400px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Traitez les résultats après la fermeture du dialogue
    });
}

}