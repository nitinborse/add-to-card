import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CardService } from 'src/app/service/card.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList :any;

  constructor(private api :ApiService, private cardService :CardService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList =res;

      this.productList.forEach((a:any) =>{
        Object.assign(a,{quantity:1,total:a.price})
      });
      
    })
  }
  addtoCard(item :any){ 
    this.cardService.addtoCart(item);

  }

}
