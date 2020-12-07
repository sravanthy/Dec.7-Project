import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LOCAL_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable()
export class CartService {
  items = [];
  constructor(
    private http: HttpClient,
    @Inject(LOCAL_STORAGE) private storageService: StorageService
  ) {}

  addToCart(product) {
    this.items.push(product);
    this.storageService.set("myCart", this.items);
  }

  getItems() {
    this.storageService.get("myCart");
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.storageService.remove("myCart");
    return this.items;
  }

  getShippingProces() {
    return this.http.get("assets/shipping.json");
  }
}
