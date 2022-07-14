import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
//import { AppRoutingModule } from './app-routing.module';
//import { SpreadSheetsComponent } from '@grapecity/spread-sheets-angular/src/spreadSheets.component';

import { AppComponent } from './app.component';

import { FinalValuesComponent } from './final-values/final-values.component';
//import { ApplicationManagementComponent } from './application-management/application-management.component';
import { RouterModule, Routes } from '@angular/router';
import { SheetComponent } from './sheet/sheet.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { Sheet1Component } from './sheet1/sheet1.component';
import { FormsModule } from '@angular/forms';
import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    AppComponent,
    FinalValuesComponent,
    SheetComponent,
    HomeComponent,
    Sheet1Component 
   
  ],
  imports: [
    //  BrowserModule,
     BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
     AppRoutingModule,
     FormsModule,
     JwPaginationModule
    // RouterModule.forRoot(routes,{ useHash: false, onSameUrlNavigation: 'reload' }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
