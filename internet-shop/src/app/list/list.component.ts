import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items = [
    {name: 't-shorts', price: 99, color: 'red'},
    {name: 'dress', price: 89, color: 'blue'},
    {name: 'pens', price: 78, color: 'yellow'},
    {name: 't-shorts', price: 111, color: 'white'}
  ];
  cart = [];
  cartAmount = 0;
  constructor() { }

  ngOnInit() {
  }

  public addToCart(item){
    this.cart.push(item);
    this.cartAmount = this.cartAmount + item.price;
  }
  public removeFromCart(item){
  let index = this.cart.indexOf(item);
  this.cartAmount = this.cartAmount - item.price;
  this.cart = this.cart.slice(index,1);
  }
}
