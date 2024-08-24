import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-discount-dialog',
  standalone: true,
  imports: [MatFormFieldModule,
     MatInputModule,
     MatDialogModule, 
     MatButtonModule,
     FormsModule],
  templateUrl: './discount-dialog.component.html',
  styleUrl: './discount-dialog.component.scss'
})
export class DiscountDialogComponent {
  discountCode: string = '';

  constructor(public dialogRef: MatDialogRef<DiscountDialogComponent>) {}

  onSave(): void {
    if (this.discountCode.toUpperCase() === 'NIHEL') {
      this.dialogRef.close({ valid: true, discount: 0.10 });
    } else {
      this.dialogRef.close({ valid: false, discount: 0 });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
