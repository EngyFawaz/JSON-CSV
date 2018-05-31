import { Component, OnInit } from "@angular/core";
import { WindowRef } from "../window.reference";
import { HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-convert",
  templateUrl: "./convert.component.html",
  styleUrls: ["./convert.component.scss"]
})
export class ConvertComponent implements OnInit {
  originalSticky = 0;

  constructor(
    private winRef: WindowRef,
    private router: Router
  ) {
  }

  
  ngOnInit() {
    
  }


  
}
