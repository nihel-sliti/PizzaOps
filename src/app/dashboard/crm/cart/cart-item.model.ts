// cart-item.model.ts

export interface Option {
    name: string;
    price: number;
  }
  
  export interface CartItem {
    name: string;
    price: number;
    image: string;
    quantity: number;
    details: string[];
    options: Option[];
    totalPrice: number;
  }
  