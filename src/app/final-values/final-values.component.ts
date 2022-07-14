import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import * as XLSX from 'xlsx';
 
export interface MyData{
  
  finalScore:any,
  impactScore:any,
  prioritization:any,
  iaasCost:any,
  passApp:any
}

@Component({
  selector: 'app-final-values',
  templateUrl: './final-values.component.html',
  styleUrls: ['./final-values.component.css']
})


export class FinalValuesComponent implements OnInit,MyData {
  passApp:any;
  iaasCost:any ;
  finalScore:any; 
  impactScore: any ;
  val:any=0;
  prioritization: any;
  fileName: any;
  finaltablen: number =1;
  loop: any;
  data:any[]=[];
  rowcount:any=0;
  doo:MyData = <any>{};

  arr: any= [];
  // obj:any;
 // obj:MyData[];
  
  //obj: {[: string,archcompp:string,impact:string]: any} = {};
  //arrobj:any=[{score},{impact}];

  constructor(private routes:Router,private activatedRoute:ActivatedRoute
    //  public obj:MyData
    
    // private app1Score:  AppComponent
    ) { 
      //this.obj:MyData;
     
      // this.data={
      //   score:this.finalScore,
      //   archcomp:this.finalScore,
      //   impact:this.impactScore,
      //   prior:this.prioritization,
      //   iaas:this.iaasCost,
      //   paas:this.passApp
      // }
    }
//     this.obj=[
//       {
//         {finalScore:this.finalScore},
//         {impactScore:this.},
//         {prioritization:this.},
//         {iaasCost:this.},
//         {passApp:this.}
// // }
//       }
//     ]
   

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any)=>{
      console.log(params.data);     
      this.finaltablen=params.data.length
      console.log(this.finaltablen)
      for(let i=0;i<params.data.length;i++){
       
        
          this.loop=params.data[i];
          this.calculation(this.loop);
          console.log(this.data)
          this.reset();
          console.log(this.data)
         

      }
      
      
    })
   
    console.log(this.data)
    
   
  }
    calculation(sum:any){
      //this.doo.rowcount = ++this.rowcount ;

      
      if(sum >= 80){
        this.finalScore='Complex'
        this.doo.finalScore=this.finalScore;
        this.data.push(this.finalScore)
      }
      if(sum >=50 ){
        this.finalScore='Medium'
        this.doo.finalScore=this.finalScore;
       this.data.push(this.finalScore)
      }
      if(sum <50 ){
        this.finalScore='Simple'
        this.doo.finalScore=this.finalScore;
       this.data.push(this.finalScore)
      }
      if(this.finalScore=='Simple'){
        this.impactScore='Low Business Impact'
        this.doo.impactScore=this.impactScore;
       this.data.push(this.impactScore)
      }
      if(this.finalScore=='Medium')
      {
        this.impactScore='Medium Business Impact'
        this.doo.impactScore=this.impactScore;
       this.data.push(this.impactScore)
      }
      if(this.finalScore=='Complex'){
        this.impactScore='Complex Business Impact'
        this.doo.impactScore=this.impactScore;
       this.data.push(this.impactScore)
      }
      if( this.impactScore=='Medium Business Impact'){
        this.prioritization='Core Cloud'
        this.doo.prioritization=this.prioritization;

       this.data.push(this.prioritization)
      }
      if(this.impactScore=='Low Business Impact'){
        this.prioritization='Quick Wins'
        this.doo.prioritization=this.prioritization;
       this.data.push(this.prioritization)
      }
      if( this.impactScore=='Complex Business Impact'){
        this.prioritization='Long Term Bets'
        this.doo.prioritization=this.prioritization;
       this.data.push(this.prioritization)
      }
      if(this.prioritization=='Quick Wins' || this.prioritization=='Core Cloud'){
        this.iaasCost='Yes'
        this.doo.iaasCost=this.iaasCost;
       this.data.push(this.iaasCost)
      }
      if(this.prioritization=='Long Term Bets'){
        this.iaasCost='No'
        this.doo.iaasCost=this.iaasCost;
       this.data.push(this.iaasCost)
      }
       if(this.iaasCost=='No'){
          this.passApp='Yes'
          this.doo.passApp=this.passApp;
         this.data.push(this.passApp)
        }else{this.passApp='No'
        this.doo.passApp=this.passApp;
        
       this.data.push(this.passApp)
       console.log(this.doo, "interface testing of doo")
      }
      this.arr.push(this.doo)
      console.log(this.arr.length)
      console.log(this.arr, "objects checking")
      //IF(E2 = "Quick Wins", "Yes", IF(D2 = "Core Cloud", "Yes", IF(D2 = "Long Term Bets", "No")))
    }
    reset(){
      this.data=[];
      // this.finalScore=null;
      // this.impactScore=null;
      // this.prioritization=null;
      // this.iaasCost=null;
      // this.passApp=null;

    }
   
    exportexcel(): void
  {
    /* pass here the table id */
    this.fileName='testing.xlsx';
    let element = document.getElementById('export');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
 
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
 
    /* save to file */  
    XLSX.writeFile(wb, this.fileName);
 
  }
    
  
}

  
//   this.finalScore={this.app1Score.businessfunScore +  this.app1Score.appScore+
// this.app1Score.appAgeScore +
// this.app1Score.codeSizeScore +
// this.app1Score.layerScore +
// this.app1Score.layerScore1 +
// this.app1Score.layerScore2 +
// this.app1Score.layerScore3 +
// this.app1Score.layerScore4 +
// this.app1Score.layerScore5 +
// this.app1Score.layerScore6 +
// this.app1Score.layerScore7 +
// this.app1Score.layerScore8 +
// this.app1Score.layerScore9 +
// this.app1Score.layerScore10 +
// this.app1Score.layerScore11 +
// this.app1Score.layerScore12 +
// this.app1Score.layerScore13 +
// this.app1Score.layerScore14 +
// this.app1Score.layerScore15 +
// this.app1Score.devOpsScore +
// this.app1Score.criticalityScore +
// this.app1Score.appUsersScore +
// this.app1Score.finalScore


    // })
    // console.log(this.data1);
    // this.finalScore=this.data1;
    // console.log(this.finalScore)


//   if(this.finalScore >= 80){
//     this.score='Complex';
//       }else if(this.finalScore >= 50){
//         this.score='Medium';
//       }else{this.score='simple'}
// }


