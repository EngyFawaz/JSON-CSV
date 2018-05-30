import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { APP_BASE_HREF } from "@angular/common";
import { ConvertComponent } from "./convert/convert.component";

const routes: Routes = [
  {
    path: "convert",
    component : ConvertComponent
  } ,
  {
    path: "",
    redirectTo: "convert",
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: "convert"
  }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: []
})
// { provide: APP_BASE_HREF, useValue: "/" }
export class AppRoutingModule {}
