import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { ConvertComponent } from "./convert/convert.component";

import { httpInterceptorProviders } from "./http-interceptors";
import {
  DlDateTimePickerDateModule,
  DlDateTimePickerComponent
} from "angular-bootstrap-datetimepicker";
import { AngularDateTimePickerModule } from "angular2-datetimepicker";
import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    DlDateTimePickerDateModule,
    AngularDateTimePickerModule,
    Ng2SmartTableModule
  ],
  bootstrap: [AppComponent],
  providers: [httpInterceptorProviders]
})
export class AppModule {}
