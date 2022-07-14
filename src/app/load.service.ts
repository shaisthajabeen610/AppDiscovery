import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadService {
  $onClick = new EventEmitter();
  constructor() { }
  onPageSave(){
    console.log("in service")
  }
}
