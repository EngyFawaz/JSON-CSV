import { Component, OnInit } from "@angular/core";
import { WindowRef } from "../window.reference";
import { HostListener } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ConvertService } from "./convert.service";
//import { PapaParse } from "papaparse";

@Component({
  selector: "app-convert",
  templateUrl: "./convert.component.html",
  styleUrls: ["./convert.component.scss"],
  // providers: [ConvertService , PapaParse]
  providers: [ConvertService]
})
export class ConvertComponent implements OnInit {
  originalSticky = 0;
  JSONfile: File;
  valid: boolean = false;
  data: Object;


  constructor(
    private winRef: WindowRef,
    private router: Router,
    private convertService: ConvertService,
    //private Papa: PapaParse
  ) {
  }

  ngOnInit(){}

  converter() {
    document.getElementById("result").innerHTML = "";
    this.convertService.convert((<HTMLInputElement>document.getElementById(
      "resizer"
    )).value).subscribe((res: any) => {
      alert(res.msg);
      if (res.hasOwnProperty("data")) {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          document.getElementById("result").innerHTML += res.data[i];
          document.getElementById("result").innerHTML += "<br/>";
      }
        }
    },
    error => {
      window.alert(error.error.msg);
    }
  );
  }

  chooseFile(event) {
    this.JSONfile = event.target.files[0];
    this.valid = true;
    console.log(this.JSONfile.type);
    if(this.JSONfile.type != "application/json"){
      alert("Please enter json file format");
      this.valid = false;
    }
  }

  onSubmit(event) {
    // var formData = new FormData();
    // formData.append('file', this.JSONfile);
    // this.convertService 
    //   .fileConvert(formData)
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });
    /////////////////////////////////////////////////////////////////////////////////
    // this.Papa.unparse(this.JSONfile, {
    //   header: true,
    //   dynamicTyping: true,
    //   complete: function(results) {
    //     this.data = results;
    //   }
    // });
  }
}

