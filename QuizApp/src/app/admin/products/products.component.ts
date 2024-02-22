import { Component } from '@angular/core';
import { an } from '@fullcalendar/core/internal-common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  products: any[] = [
    {
      "id": 1,
      "name": "Margherita Pizza",
      "description": "Classic delight with 100% real mozzarella cheese",
      "price": 5.99,
      "category": "Pizza"
    },
    {
      "id": 2,
      "name": "Veggie Supreme Pizza",
      "description": "Loaded with vegetables & cheese",
      "price": 7.99,
      "category": "Pizza"
    },
    {
      "id": 3,
      "name": "Spaghetti Carbonara",
      "description": "Creamy pasta with bacon and parmesan cheese",
      "price": 8.50,
      "category": "Pasta"
    },
    {
      "id": 4,
      "name": "Beef Burger",
      "description": "Juicy beef patty with lettuce, tomato and cheese",
      "price": 6.50,
      "category": "Burgers"
    },
    {
      "id": 5,
      "name": "Caesar Salad",
      "description": "Fresh romaine lettuce with Caesar dressing, croutons and cheese",
      "price": 4.99,
      "category": "Salads"
    },
    {
      "id": 6,
      "name": "Chicken Wings",
      "description": "Spicy and juicy chicken wings, served with sauce",
      "price": 5.99,
      "category": "Snacks"
    },
    {
      "id": 7,
      "name": "Chocolate Cake",
      "description": "Rich and moist chocolate layer cake",
      "price": 3.99,
      "category": "Desserts"
    }
  ]
  
  productDialog: boolean = false;
  product: any = { name: '', price: 0 };

  constructor() {}

  ngOnInit(): void {
    // Initialize products here or fetch them from a service
  }

  showEditProductDialog(product: any) {
    this.product = { ...product };
    this.productDialog = true;
  }

  saveProduct() {
    // Implement product saving logic here
    this.productDialog = false;
  }
}
