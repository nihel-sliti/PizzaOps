import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { FeathericonsModule } from '../../../icons/feathericons/feathericons.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-payment-method-dialog',
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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule, 
  ],
  templateUrl: './payment-method-dialog.component.html',
  styleUrl: './payment-method-dialog.component.scss'
})
export class PaymentMethodDialogComponent {
  constructor(public dialogRef: MatDialogRef<PaymentMethodDialogComponent>) {}

  onSave(): void {
    // Logique pour enregistrer les informations de paiement
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
