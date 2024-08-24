import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';




@Component({
    selector: 'app-lead-conversations',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lead-conversations.component.html',
    styleUrl: './lead-conversations.component.scss'
})
export class LeadConversationsComponent implements OnInit {

    promotions = [
        {
          name: 'Ham subs',
          image: 'assets/images/subs/subs1.jpeg',
          discount: '-10% sélection',
          rating: '94%',
          reviews: 242,
          category: 'Pizza',
          price: '8,500',
          time: '10-20 min'
        },
        {
          name: 'chiken subs',
          image: 'assets/images/subs/subs2.jpeg',
          discount: '-20% sélection',
          rating: '87%',
          reviews: 217,
          category: 'Sweets',
          price: '17,500',
          time: '10-20 min'
        },
        {
          name: 'Tchiboo Fast Food',
          image: 'assets/images/subs/subs3.jpeg',
          discount: '-10% sélection',
          rating: '83%',
          reviews: 150,
          category: 'Fast Food',
          price: '12,500',
          time: '15-25 min'
        },
        {
          name: 'Makloub MIZEN',
          image: 'assets/images/subs/subs4.jpg',
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
