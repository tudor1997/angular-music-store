import { GetProductsService } from '../../services/get-products.service';
import { Component, OnInit } from '@angular/core';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
 
  constructor(private getProductsService : GetProductsService) {}

  ngOnInit(): void {
  
  }

 
}
