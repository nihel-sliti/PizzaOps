import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AddRecipientDialogComponent } from '../add-recipient-dialog/add-recipient-dialog.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-delivery-details',
  templateUrl: './delivery-details.component.html',
  styleUrls: ['./delivery-details.component.scss'],
  standalone: true, // Indique que c'est un composant autonome
  imports: [CommonModule, FormsModule] 
})
export class DeliveryDetailsComponent implements OnInit {
  // Adresse par défaut
  address: string = 'V52G+R59, Ariana, Tunisie';
  
  // Liste des produits
  products: Product[] = [
    {
      quantity: 1,
      name: 'Pizza Roma - Tonno',
      price: 39.000
    }
  ];

  // Récapitulatif de la commande
  summary: Summary = {
    productsTotal: 39.000,
    deliveryFee: 0.500,
    serviceFee: 0.250,
    promoCodeDiscount: -4.000,
    total: 35.750
  };

  // Temps estimé
  estimatedTime: string = '15-25 minutes';
  additionalInfo: string = 'Dès que possible';

  constructor(
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  openAddRecipientDialog(): void {
    this.dialog.open(AddRecipientDialogComponent, {
      width: '400px',
      disableClose: false
    });
  }

  // Méthode pour valider la commande
  validateOrder(): void {
    this.router.navigateByUrl('/ecommerce-page/cart');
  }
  allergy: string = ''; // Propriété liée au champ de saisie

  // Vous pouvez ajouter des méthodes pour traiter la valeur saisie
  submitAllergy() {
    console.log('Allergies saisies :', this.allergy);
    // Ajoutez ici la logique pour gérer les allergies
  }
}

// Interfaces pour structurer les données
interface Product {
  quantity: number;
  name: string;
  price: number;
}

interface Summary {
  productsTotal: number;
  deliveryFee: number;
  serviceFee: number;
  promoCodeDiscount: number;
  total: number;
}
