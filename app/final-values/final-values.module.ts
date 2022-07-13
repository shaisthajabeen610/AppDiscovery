import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { AppComponent } from "../app.component";
import { SheetComponent } from "../sheet/sheet.component";
import { FinalValuesComponent } from "./final-values.component";



@NgModule({
    declarations: [
      AppComponent,
      FinalValuesComponent,
      SheetComponent 
     
    ],
    imports: [
      //  BrowserModule,
       BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
       AppRoutingModule
      // RouterModule.forRoot(routes,{ useHash: false, onSameUrlNavigation: 'reload' }),
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class FinalValuesModules { }