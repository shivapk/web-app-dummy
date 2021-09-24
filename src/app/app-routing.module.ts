import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";

const routes: Routes = [
  { path: "", redirectTo: "landing", pathMatch: "full" },
  // { path: "home", component: IndexComponent },
  // { path: "profile", component: ProfilepageComponent },
  // { path: "register", component: RegisterpageComponent },
  { path: "landing", component: LandingpageComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
