import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
   
  constructor(private notifyService : NotificationService,
     private productService:ProductService,
     private activatedRoute:ActivatedRoute
     ) { }
  title ="Ürün Listesi"
  filterText=""

 
  products : Product[] =[]

   addToCart(product:Product) {
  
   this.notifyService.showSuccess(product.name + " eklendi","")
    
   
  }



  ngOnInit(): void {
this.activatedRoute.params.subscribe(params=>{
  this.productService.getProducts(params["categoryId"]).subscribe(data=>{
    this.products = data
  })
})

   
  }

}
