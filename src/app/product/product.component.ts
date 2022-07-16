import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

import { Product } from './product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
   
  constructor(private notifyService : NotificationService) { }
  title ="Ürün Listesi"
  filterText=""
 
  products : Product[] =[
    {id:1, name : "Laptop", price:2500, categoryId:1, description:"Asus ZenBook", imageUrl:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {id:2, name : "Mouse", price:25, categoryId:2, description:"A4 tech", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"},
    {id:3, name : "Mouse", price:25, categoryId:2, description:"A4 tech", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"},
    {id:4, name : "Mouse", price:25, categoryId:2, description:"A4 tech", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"},
    {id:5, name : "Mouse", price:25, categoryId:2, description:"A4 tech", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"},
    {id:6, name : "Mouse", price:25, categoryId:2, description:"A4 tech", imageUrl:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"}
  ]

   addToCart(product:Product) {
  
   this.notifyService.showSuccess(product.name + " eklendi","")
    
   
  }


  
 

  

  ngOnInit(): void {
  }

}
