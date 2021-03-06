import { Component } from '@angular/core';

import { Product } from './product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[];

  constructor(){
    this.products = [ new Product(
      'NICEHAT',
      'A Nice Black Hat',
      '/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    ),

    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      '/resources/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      238.99
    )

  ]
  }

productWasSelected(product: Product): void {
  console.log('Product clicked: ', product);
}





}
