import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartmap;
  constructor(private ds:DataService) { }
  ngOnInit(): void { 

  this.cartmap=this.ds.countMap;
  }

  
}
