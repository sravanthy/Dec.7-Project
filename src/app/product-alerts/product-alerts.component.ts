import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; //will be consumed by child
  @Output() notify = new EventEmitter(); // will emit event to parent

  constructor() {}

  ngOnInit() {}
}
