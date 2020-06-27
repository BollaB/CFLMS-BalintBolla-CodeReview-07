import { Component, OnInit } from '@angular/core';
import { offers } from '../offers';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {
offers = offers;
  constructor(private cartService: CartService) { }

 addToCart(offer) {
   window.alert('The destination has been added to the cart!');
   this.cartService.addToCart(offer);
 }

  ngOnInit(): void {
  }

}
