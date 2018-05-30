import { Component } from "@angular/core";
import { WindowRef } from "./window.reference";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  template: `<router-outlet (activate)="onActivate($event)" style="z-index: 0"></router-outlet><footerr></footerr>`,

  providers: [WindowRef]
})
export class AppComponent {
  visible = false;

  constructor(private router: Router) {
      this.visible = true;
  }

  ngDoCheck() {
      this.visible = true;
  }

  // Scroll up to the top of the page on changing the route
  onActivate(event) {}
 
}
