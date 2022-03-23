import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public product : any = [];
  public grandtotal !:number;


  constructor(public cardservice : CardService) { }

  ngOnInit(): void {
    this.cardservice.getProduct().subscribe(res =>{
      this.product= res;
      this.grandtotal =this.cardservice.getTotalPrice();
    })
  }

    removeItem(item : any){
      this.cardservice.removeCardItem(item)
    }

    emptyCard(){
       this.cardservice.removeAllCart();
    }
    
}
