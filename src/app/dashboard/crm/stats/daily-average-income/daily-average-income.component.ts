import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-daily-average-income',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './daily-average-income.component.html',
    styleUrl: './daily-average-income.component.scss'
})
export class DailyAverageIncomeComponent implements OnInit {

    promotions = [
        {
          name: 'Makloub MIZEN',
          image: 'assets/images/burger/burger9.jpg',
          discount: '-10% sélection',
          rating: '94%',
          reviews: 242,
          category: 'Pizza',
          price: '8,500',
          time: '10-20 min'
        },
        {
          name: 'Pasta',
          image: 'assets/images/burger/burger4.jpeg',
          discount: '-20% sélection',
          rating: '87%',
          reviews: 217,
          category: 'Sweets',
          price: '17,500',
          time: '10-20 min'
        },
        {
          name: 'Tchiboo Fast Food',
          image: 'assets/images/burger/burger1.jpeg',
          discount: '-10% sélection',
          rating: '83%',
          reviews: 150,
          category: 'Fast Food',
          price: '12,500',
          time: '15-25 min'
        },
        {
          name: 'Makloub MIZEN',
          image: 'assets/images/burger/Turkey-Burgers-blog.jpg',
          discount: '-10% sélection',
          rating: '94%',
          reviews: 242,
          category: 'Pizza',
          price: '5,500',
          time: '10-20 min'
        }
      ];
    
      constructor() { }
    
      ngOnInit(): void { }
    } 