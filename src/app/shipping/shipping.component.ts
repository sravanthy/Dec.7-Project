import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.component.html",
  styleUrls: ["./shipping.component.css"]
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  costs = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingProces();

    // this.shippingCosts.subscribe(cost => {
    //   console.log(cost);
    //   this.costs = cost;
    // });
  }
}
