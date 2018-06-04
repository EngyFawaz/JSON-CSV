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
  JSONfile: File;
  valid: boolean = false;
  fileContent : String ;


  constructor(
    private winRef: WindowRef,
    private router: Router,
    private convertService: ConvertService
  ) {
  }

  ngOnInit(){}

  converter() {
    document.getElementById("result").innerHTML = "";
    this.convertService.convert((<HTMLInputElement>document.getElementById(
      "json"
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
    var file:File = this.JSONfile; 
    var myReader:FileReader = new FileReader();
    var self = this;

    myReader.onloadend = function(e){
      console.log(myReader.result);
      self.fileContent = myReader.result;
    }

    myReader.readAsText(file);
  }

  onSubmit(event) {
    var writeData = "";
    this.convertService.convert(this.fileContent).subscribe((res: any) => {
      alert(res.msg);
      if (res.hasOwnProperty("data")) {
        console.log(res.data);
        for (var i = 0; i < res.data.length; i++) {
          writeData += res.data[i];
          writeData += "\r\n";
      }
      window.open("data:text/csv;charset=utf-8," + escape(writeData));
        }
    },
    error => {
      window.alert(error.error.msg);
    }
  );
  }
}

