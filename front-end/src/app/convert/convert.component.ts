import { Component, OnInit } from "@angular/core";
import { WindowRef } from "../window.reference";
import { HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ConvertService } from "./convert.service";

@Component({
  selector: "app-convert",
  templateUrl: "./convert.component.html",
  styleUrls: ["./convert.component.scss"],
  providers: [ConvertService]
})
export class ConvertComponent implements OnInit {
  originalSticky = 0;

  constructor(
    private winRef: WindowRef,
    private router: Router,
    private convertService: ConvertService
  ) {
  }

  ngOnInit(){}

  converter() {
    this.convertService.convert((<HTMLInputElement>document.getElementById(
      "resizer"
    )).value);
  }


  
}
