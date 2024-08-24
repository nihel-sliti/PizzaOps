import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface OrderDetail {
  name: string;  // Assurez-vous que 'name' est présent
  quantity?: number;
  price?: number;
  totalPrice: number;
  image?: string;
}


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orderDetails = new BehaviorSubject<OrderDetail[]>([]);
  private total = new BehaviorSubject<number>(0);

  setOrderDetails(orderDetails: OrderDetail[], total: number): void {
    console.log('Setting order details:', orderDetails);  // Ajoutez ce log
    this.orderDetails.next(orderDetails);
    this.total.next(total);
  }
  getOrderDetails() {
    return this.orderDetails.asObservable();
  }

  getTotal() {
    return this.total.asObservable();
  }
}
