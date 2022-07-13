import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "./app.component";
import { FinalValuesComponent } from "./final-values/final-values.component";
import { HomeComponent } from "./home/home.component";
import { SheetComponent } from "./sheet/sheet.component";
import { Sheet1Component } from "./sheet1/sheet1.component";

const routes:Routes=[
 
  {
    path:'',pathMatch: 'full' ,redirectTo:'/home'
  },
  {path:'home', component:HomeComponent},
    { path:'sheet', component:SheetComponent},
    { path:'final-values', component:FinalValuesComponent},
    {path:'sheet1', component:Sheet1Component}
  
  
  //   {path:"appManagement" , component:AppComponent},
  //   children:[{path:"final-values",component:FinalValuesComponent}]
  // }
  // {
  //   path: 'final-values',
  //   loadChildren: () => import('.src/app/final-values/final-values.module').then(mod => mod.FinalValues),
  // },
  
  ]


@NgModule({
    imports: [  
      RouterModule.forRoot(routes, { useHash: false, onSameUrlNavigation: 'reload' })  
    ],
      exports: [RouterModule],  
    providers: [],  
  })
  export class AppRoutingModule{ }