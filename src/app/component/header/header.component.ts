import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/service/card.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cardservice : CardService) { }

  ngOnInit(): void {
    
    this.cardservice.getProduct()
    .subscribe(res => {
      this.totalItem =res.length;

    })

  }



}
