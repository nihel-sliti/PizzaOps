import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatIconModule],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent {
  unitPrice: number;
  selectedOptions: Option[] = [];

  constructor(
    public dialogRef: MatDialogRef<ItemDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuItem
  ) {
    this.unitPrice = data.price;
    this.updatePrice();
  }

  incrementQuantity() {
    this.data.quantity++;
    this.updatePrice();
  }

  decrementQuantity() {
    if (this.data.quantity > 0) {
      this.data.quantity--;
      this.updatePrice();
    }
  }

  updatePrice() {
    const optionsPrice = this.selectedOptions.reduce((sum, option) => sum + option.price, 0);
    this.data.totalPrice = (this.unitPrice + optionsPrice) * this.data.quantity;
  }

  toggleOption(option: Option) {
    const index = this.selectedOptions.findIndex(o => o.name === option.name);
    if (index > -1) {
      this.selectedOptions.splice(index, 1);
    } else {
      this.selectedOptions.push(option);
    }
    this.updatePrice();
  }

  isSelectedOption(option: Option): boolean {
    return this.selectedOptions.some(o => o.name === option.name);
  }

  onOptionKeyDown(event: KeyboardEvent, option: Option) {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleOption(option);
      event.preventDefault();  // Prevent default behavior for spacebar
    }
  }

  closeDialog() {
    this.dialogRef.close({
      ...this.data,
      options: this.selectedOptions,
      totalPrice: this.data.totalPrice  // Ensure totalPrice is passed correctly
    });
  }
}
