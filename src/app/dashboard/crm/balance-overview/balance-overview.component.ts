import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ItemDetailComponent } from '../item-detail/item-detail.component';
import { CartService } from '../cart/cart.service';
import { CartComponent } from '../cart/cart.component';

interface Option {
  name: string;
  price: number;
}

interface MenuItem {
  name: string;
  price: number;
  image: string;
  quantity: number;
  details: string[];
  options: Option[];
  totalPrice: number;
}

@Component({
  selector: 'app-balance-overview',
  standalone: true,
  imports: [CommonModule, CartComponent, MatDialogModule, RouterLink],
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.scss']
})
export class BalanceOverviewComponent {
  menuItems: MenuItem[] = [
    {
      name: 'Lily Salad',
      price: 19.900,
      image: 'assets/images/salad_lily.jpg',
      quantity: 0,
      details: ['Laitue', 'tomate cerise', 'tomate', 'roquette', 'concombre', 'maïs', 'poitrine de dinde fumée 50g', 'jambon de dinde 50g', 'ricotta 50g', 'gruyère 30g', 'sicilien 50g'],
      options: [
        { name: 'Harissa', price: 1.000 },
        { name: 'Mayonnaise', price: 0.500 },
        { name: 'Sauce à l\'Ail', price: 0.700 },
        { name: 'Sauce Pesto', price: 1.200 },
        { name: 'Ketchup', price: 0.300 }
      ],
      totalPrice: 0  // Initialize totalPrice
    },
    {
      name: 'Golden Salad',
      price: 15.900,
      image: 'assets/images/salade.jpg',
      quantity: 0,
      details: ['Laitue', 'tomate cerise', 'tomate', 'roquette', 'concombre', 'maïs', 'escalope grillée 90g', 'gruyère 40g ou gouda 40g', 'œuf'],
      options: [
        { name: 'Harissa', price: 1.000 },
        { name: 'Mayonnaise', price: 0.500 },
        { name: 'Sauce à l\'Ail', price: 0.700 },
        { name: 'Sauce Pesto', price: 1.200 },
        { name: 'Ketchup', price: 0.300 }
      ],
      totalPrice: 0  // Initialize totalPrice
    }
    ,
    {
      name: 'Golden Salad',
      price: 15.900,
      image: 'assets/images/slademaison.png',
      quantity: 0,
      details: ['Laitue', 'tomate cerise', 'tomate', 'roquette', 'concombre', 'maïs', 'escalope grillée 90g', 'gruyère 40g ou gouda 40g', 'œuf'],
      options: [
        { name: 'Harissa', price: 1.000 },
        { name: 'Mayonnaise', price: 0.500 },
        { name: 'Sauce à l\'Ail', price: 0.700 },
        { name: 'Sauce Pesto', price: 1.200 },
        { name: 'Ketchup', price: 0.300 }
      ],
      totalPrice: 0  // Initialize totalPrice
    }
    ,
    {
      name: 'Golden Salad',
      price: 15.900,
      image: 'assets/images/pizza.png',
      quantity: 0,
      details: ['Laitue', 'tomate cerise', 'tomate', 'roquette', 'concombre', 'maïs', 'escalope grillée 90g', 'gruyère 40g ou gouda 40g', 'œuf'],
      options: [
        { name: 'Harissa', price: 1.000 },
        { name: 'Mayonnaise', price: 0.500 },
        { name: 'Sauce à l\'Ail', price: 0.700 },
        { name: 'Sauce Pesto', price: 1.200 },
        { name: 'Ketchup', price: 0.300 }
      ],
      totalPrice: 0  // Initialize totalPrice
    }
  ];

  constructor(public dialog: MatDialog, private cartService: CartService) {}

  openItemDetail(item: MenuItem) {
    const itemCopy = { ...item, quantity: 1, totalPrice: item.price };

    const dialogRef = this.dialog.open(ItemDetailComponent, {
      width: '600px',
      data: itemCopy
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cartService.addItem({
          name: result.name,
          price: result.price,
          image: result.image,
          quantity: result.quantity,
          details: result.details,
          options: result.options,
          totalPrice: result.totalPrice
        });
      }
    });
  }

  incrementQuantity(item: MenuItem) {
    this.cartService.addItem({
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
      details: item.details,
      options: item.options,
      totalPrice: item.totalPrice
    });
  }

  onKeyDown(event: KeyboardEvent, item: MenuItem) {
    // Handle keydown event
    console.log('KeyDown:', event.key);
    if (event.key === 'Enter' || event.key === ' ') {
      this.openItemDetail(item);
    }
  }

  onKeyPress(event: KeyboardEvent, item: MenuItem) {
    // Handle keypress event
    console.log('KeyPress:', event.key);
  }

  onKeyUp(event: KeyboardEvent, item: MenuItem) {
    // Handle keyup event
    console.log('KeyUp:', event.key);
  }
}
