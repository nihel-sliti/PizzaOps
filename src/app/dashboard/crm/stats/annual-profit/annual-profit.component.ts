import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-annual-profit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './annual-profit.component.html',
  styleUrls: ['./annual-profit.component.scss']
})
export class AnnualProfitComponent implements OnInit {

 
  promotions = [
    {
      name: 'Makloub MIZEN',
      image: 'assets/images/makloub.jpg',
      discount: '-10% sélection',
      rating: '94%',
      reviews: 242,
      category: 'Pizza',
      price: '8,500',
      time: '10-20 min'
    },
    {
      name: 'Pasta',
      image: 'assets/images/pasta.jpeg',
      discount: '-20% sélection',
      rating: '87%',
      reviews: 217,
      category: 'Sweets',
      price: '17,500',
      time: '10-20 min'
    },
    {
      name: 'Tchiboo Fast Food',
      image: 'assets/images/burger3.jpeg',
      discount: '-10% sélection',
      rating: '83%',
      reviews: 150,
      category: 'Fast Food',
      price: '12,500',
      time: '15-25 min'
    },
    {
      name: 'Makloub MIZEN',
      image: 'assets/images/makloub.jpg',
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
