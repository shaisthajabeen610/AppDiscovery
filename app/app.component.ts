import { ElementSchemaRegistry, makeBindingParser } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent  {
  title = 'AppDiscovery';
  
  // businessfunScore:any=0 ;
  // appScore: any=0;
  // appAgeScore: any=0;
  // codeSizeScore:any=0;
  // appUsersScore:any=0;
  // criticalityScore:any=0;
  // layerScore:any=0;
  // layerScore1: any=0;
  // layerScore2: any=0;
  // layerScore3: any=0;
  // layerScore4: any=0;
  // layerScore5: any=0;
  // layerScore6: any=0;
  // layerScore7: any=0;
  // layerScore8: any=0;
  // layerScore9: any=0;
  // serversScore: any=0;
  // layerScore10: any=0;
  // layerScore11: any=0;
  // layerScore12: any=0;
  // layerScore13: any=0;
  // impactScore: any=0;
  // layerScore14: any=0;
  // devOpsScore: any=0;
  // layerScore15: any=0;
  
  // constructor( private router:Router) {

  // }
  
 
  //  businessUnit=[
  //    {label:'Sales', value:	4},
  //   {label:'Production' ,value:	5},
  //   {label:'Testing' ,value:	2},
  //   {label:'Development' ,value:	1},
  //   {label:'Marketing' ,value:	2},
  //   {label:'IT Systems' ,value:	3},
  //   {label:'Billing'  ,value:	5}
  //   ];
  //   businessUnitScore=4;
   
  // changeBusinessUnit(e:any){
  //   let temp=e.target.value;
  //   for(let i = 0;i<this.businessUnit.length;i++) {
  //     console.log(e);

  //     if(temp === this.businessUnit[i].label) {

  //       this.businessUnitScore = this.businessUnit[i].value

  //     }

  //   }
  // }
  //   applicatiobBusinessFuncionality=[
  //     {label:'Policy Admin System	',value:5},
  //     {label:' Billing System',value:	5},
  //     {label:'Claim Management System',value:	5},
  //     {label:' Content Management System',value:	5},
  //     {label:' Downstream System',value:	5},
  //     {label:' Rating System',value:	5}
  //   ];
  //   changeApplicationFunctionality(e:any){
  //     let temp=e.target.value;
  //    for(let i = 0;i<this.applicatiobBusinessFuncionality.length;i++) {
  //     console.log(e);

  //     if(temp === this.applicatiobBusinessFuncionality[i].label) {

  //       this.businessfunScore = this.applicatiobBusinessFuncionality[i].value

  //     }

  //   }
   
  //   //console.log
  
  //  //const selected = value;


  //   //  this.businessUnitScore = 
  //   //  this.businessUnit[value];
    
  // }
  // appName=[
  //   {label:'WINS - PAS'},
  //   { label:'Duckcreek'},
  //     { label:'Guidewire ClaimCenter'},
  //     { label:'WINS - Billing'},
  //     { label:'Access DB - Billing'}
  // ]
  // appCode=[
  //   {label:'.Net Platform'},
  //    {label:'Java Platform'},
  //   {label:' Php Platform'},
  //   {label:' C++ Platform'},
  //   {label:' Duckcreek'},
  //   {label:' WINS'},
  //   {label:' Guidewire'},
  //   {label:' Access DB'} 
  // ]
  // appAge=[
  //   {label:'3'	,value:1},
  //   {label:'5'	,value:3},
  //   {label:'10',value:	5}
  // ]
  // codeSize=[
    
  //    {label:'10000-25000',value:	1},
  //    {label:'25001-50000',value:	2},
  //    {label:'50001-100000',value:	3},
  //    {label:'100000 & more',value:	5}
    
  // ]
  // sapplicationType=[
  //   {label:'Customer Facing',value:	5},
  //    {label:'User Interface',value:	5},
  //    {label:'Transaction Processing',value:	5},
  //    {label:'Dataware house',value:	5},
  //    {label:'Database',value:	5}
  // ]
  // devOps=[
  //   {label:'Managed by Client Team', value:	1},
  //   {label:'Outsourced', value:	5},
  //   {label:'TBD', value: 0}  
  // ]
  // appUsers=[
  //   {label:'1-1000',value:	1},
  //   {label:'1000-5000',value:	2},
  //   {label:'5000-10000',value:	3},
  //   {label:'10000+',value:	5}
  // ]
  // oS=[
  //   {label:'Windows'},
  //   {label:'Linux'}
  // ]
  // servers=[
  //   {label:'1 - 25 servers',value:	2},
  //   {label:'26 - 50 servers',value:	3},
  //   {label:'51 - 100 servers',value:	5}
  // ]
  // impact=[
  //   {label:'$10,000',value: 	1}, 
  //   {label:'$10001 to $50000',value:	3 },
  //   {label:'$50000 or more',value:	5 },
  // ]
  // layer=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer1=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer5=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer2=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer3=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer4=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer6=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer7=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer8=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer9=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer10=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer11=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer12=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer13=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer14=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // layer15=[
  //   {label:'yes',value:	5},
  //   {label:'No',value: 0}
  // ]
  // businessCrticality=[
  //   {label:'Critical',value:	5},
  //   {label:'High',value:	3},
  //   {label:'low',value:	2},
  //   {label:'Non Production',value:	1}
  // ]
  // changeApptype(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.sapplicationType.length;i++) {
  //     console.log(e);
  //     if(temp === this.sapplicationType[i].label) {
  //       this.appScore = this.sapplicationType[i].value
  //       this.totalScores.push(this.appScore);
  //     }
  //   }
  // }
  // changeDevOps(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.devOps.length;i++) {
  //     console.log(e);
  //     if(temp === this.devOps[i].label) {
  //       this.devOpsScore = this.devOps[i].value
  //       this.totalScores.push(this.devOpsScore);
  //     }
  //   }
  // }
  // changeAppAge(e:any){

  //   let temp=e.target.value;
  //   for(let i = 0;i<this.appAge.length;i++) {
  //    console.log(e);
  //    if(temp === this.appAge[i].label) {
  //      this.appAgeScore = this.appAge[i].value
  //      this.totalScores.push(this.appAgeScore);
  //    }
  //  }
  // }
  // changeCodeSize(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.codeSize.length;i++) {
  //     console.log(e);
  //     if(temp === this.codeSize[i].label) {
  //       this.codeSizeScore = this.codeSize[i].value
  //       this.totalScores.push(this.codeSizeScore);
  //     }
  //   }
  // }
  
  // changeAppUsers(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.appUsers.length;i++) {
  //     console.log(e);
  //     if(temp === this.appUsers[i].label) {
  //       this.appUsersScore = this.appUsers[i].value
  //       this.totalScores.push(this.appUsersScore);
  //     }
  //   }
  // }
  // changeServers(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.servers.length;i++) {
  //     console.log(e);
  //     if(temp === this.servers[i].label) {
  //       this.serversScore = this.servers[i].value
  //       this.totalScores.push(this.serversScore);
  //     }
  //   }
  // }
  // changeImpact(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.impact.length;i++) {
  //     console.log(e);
  //     if(temp === this.impact[i].label) {
  //       this.impactScore = this.impact[i].value
  //       this.totalScores.push(this.impactScore);
  //     }
  //   }
  // }
  // changeCrticality(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.businessCrticality.length;i++) {
  //     console.log(e);
  //     if(temp === this.businessCrticality[i].label) {
  //       this.criticalityScore = this.businessCrticality[i].value
  //       this.totalScores.push(this.criticalityScore);
  //     }
  //   }
  // }
  // totalScores: any[]=[];
  // changeLayer(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer[i].label) {
  //       this.layerScore = this.layer[i].value
  //       this.totalScores.push(this.layerScore);
  //     }
  //   }
  // }
  // changeLayer3(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer3.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer3[i].label) {
  //       this.layerScore3 = this.layer3[i].value
  //       this.totalScores.push(this.layerScore3);
  //     }
  //   }
  // }
  // changeLayer4(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer4.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer4[i].label) {
  //       this.layerScore4= this.layer4[i].value
  //       this.totalScores.push(this.layerScore4);
  //     }
  //   }
  // }
  // changeLayer1(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer1.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer1[i].label) {
  //       this.layerScore1 = this.layer1[i].value
  //       this.totalScores.push(this.layerScore1);
  //     }
  //   }
  // }
  // changeLayer2(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer2.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer2[i].label) {
  //       this.layerScore2= this.layer2[i].value
  //       this.totalScores.push(this.layerScore2);
  //     }
  //   }
  // }
  // changeLayer5(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer5.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer5[i].label) {
  //       this.layerScore5= this.layer5[i].value
  //       this.totalScores.push(this.layerScore5);
  //     }
  //   }
  // }
  // changeLayer6(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer6.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer6[i].label) {
  //       this.layerScore6= this.layer6[i].value
  //       this.totalScores.push(this.layerScore6);
  //     }
  //   }
  // }
  // changeLayer7(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer7.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer7[i].label) {
  //       this.layerScore7= this.layer7[i].value
  //       this.totalScores.push(this.layerScore7);
  //     }
  //   }
  // }
  // changeLayer8(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer8.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer8[i].label) {
  //       this.layerScore8= this.layer8[i].value
  //       this.totalScores.push(this.layerScore8);
  //     }
  //   }
  // }
 
  //  changeLayer9(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer9.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer9[i].label) {
  //       this.layerScore9= this.layer9[i].value
  //       this.totalScores.push(this.layerScore9);
  //     }
  //   }
  // }
  // changeLayer10(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer10.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer10[i].label) {
  //       this.layerScore10= this.layer10[i].value
  //       this.totalScores.push(this.layerScore10);
  //     }
  //   }
  // }
  // changeLayer11(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer11.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer11[i].label) {
  //       this.layerScore11= this.layer11[i].value
  //       this.totalScores.push(this.layerScore11);
  //     }
  //   }
  // }
  // changeLayer12(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer12.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer12[i].label) {
  //       this.layerScore12= this.layer12[i].value
  //       this.totalScores.push(this.layerScore12);
  //     }
  //   }
  // }
  // changeLayer13(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer13.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer13[i].label) {
  //       this.layerScore13= this.layer13[i].value
  //       this.totalScores.push(this.layerScore13);
  //     }
  //   }
  // }
  // changeLayer14(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer14.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer14[i].label) {
  //       this.layerScore14= this.layer14[i].value
  //       this.totalScores.push(this.layerScore14);
  //     }
  //   }
  // }
  // changeLayer15(e:any){
  //   let temp=e.target.value;
  //    for(let i = 0;i<this.layer15.length;i++) {
  //     console.log(e);
  //     if(temp === this.layer15[i].label) {
  //       this.layerScore15= this.layer15[i].value
  //       this.totalScores.push(this.layerScore15);
  //     }
  //   }
  // }
  // public isFinalValueVisible=false;

  // onSave(){
  //   this.isFinalValueVisible=true;
  //   console.log("clicked")
  //   // this.service.onPageSave();
  //   this.router.navigate(['/final-values']);
  // }


}
//,{queryParams:{data:this.totalScores}}



