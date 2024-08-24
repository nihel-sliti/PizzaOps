import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-total-orders',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './total-orders.component.html',
    styleUrl: './total-orders.component.scss'
})
export class TotalOrdersComponent implements OnInit {
    promotions = [
      {
        name: 'Makloub MIZEN',
        image: 'assets/images/makloub.jpg',
        discount: '-10% sélection',
        rating: '94%',
        reviews: 242,
        category: 'Pizza',
        price: '0,500',
        time: '10-20 min'
      },
      {
        name: 'Pasta',
        image: 'assets/images/pasta.jpeg',
        discount: '-10% sélection',
        rating: '87%',
        reviews: 217,
        category: 'Sweets',
        price: '0,500',
        time: '10-20 min'
      },
      {
        name: 'Tchiboo Fast Food',
        image: 'assets/images/burger3.jpeg',
        discount: '-10% sélection',
        rating: '83%',
        reviews: 150,
        category: 'Fast Food',
        price: '0,500',
        time: '15-25 min'
      },
      {
        name: 'Makloub MIZEN',
        image: 'assets/images/makloub.jpg',
        discount: '-10% sélection',
        rating: '94%',
        reviews: 242,
        category: 'Pizza',
        price: '0,500',
        time: '10-20 min'
      }
    ];
  
    constructor() { }
  
    ngOnInit(): void { }
  }
  