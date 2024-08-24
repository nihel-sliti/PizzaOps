import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-total-growth',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './total-growth.component.html',
  styleUrls: ['./total-growth.component.scss']
})
export class TotalGrowthComponent implements OnInit {
  promotions = [
    {
      name: 'Panozzo',
      image: 'assets/images/sandwitch/panotzo.jpg',
      discount: '-10% sélection',
      rating: '94%',
      reviews: 242,
      category: 'sandwich',
      price: '9,500',
      time: '10-20 min'
    },
    {
      name: 'Kafteji',
      image: 'assets/images/sandwitch/kafteji.jpeg',
      discount: '-10% sélection',
      rating: '87%',
      reviews: 200,
      category: 'sandwich',
      price: '5,500',
      time: '10-20 min'
    },
    {
      name: 'Tchiboo Fast Food',
      image: 'assets/images/sandwitch/sandwitch.jpeg',
      discount: '-10% sélection',
      rating: '83%',
      reviews: 150,
      category: 'sandwich',
      price: '8,500',
      time: '15-25 min'
    },
    {
      name: 'Thon',
      image: 'assets/images/sandwitch/thon.jpeg',
      discount: '-10% sélection',
      rating: '94%',
      reviews: 249,
      category: 'sandwich',
      price: '7,500',
      time: '10-20 min'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
