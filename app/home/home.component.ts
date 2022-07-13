import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  val: any;
  name: any="";
  cloud: any;
  homedata: any[]=[];
  firstname:any=null;
  cloud1: any;
  selectedElement:any;
  checking:any;
  toggle:boolean =false;


  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  refresharray(){
    this.homedata=[];
  }
  onSelect(e:any){
    
    this.val=e.target.value
    
    console.log(this.val)
  }
  // onContinue(username:any){
  //   this.name=username;
  //   console.log(this.name)
  // }
  inputname(e:any){
    console.log(e.target.value);
    this.name=e.target.value;
    
   // this.homedata.push(this.name)

  }
  selectedCloud(e:any){
    this.cloud=e.target.value
    console.log(this.cloud)
    
  }
  onCancel(e:any){
    
    console.log("in same page",e.value)
   this.checking=e.value;
    // this.myform.reset();
    this.router.navigate(['/home'])
    this.cloud1=null
    e.value='';
    this.selectedElement=null;
    this.refresharray();
    // this.selectedElement.value=null;
  }
  onContinue(e:any){
    this.refresharray();
    this.homedata.push(this.val)
    this.homedata.push(this.cloud)
    this.homedata.push(this.name)
    console.log(this.homedata)
    if(this.name!=="" && this.val!==0 && this.cloud!==undefined){
      this.router.navigate(['/sheet'],{queryParams:{data:this.homedata}});
      this.refresharray();
      
    }
   // this.router.navigate(['/sheet'],{queryParams:{data:this.homedata}});
  }

}
