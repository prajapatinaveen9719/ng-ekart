import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent-ctp',
  templateUrl: './parent-ctp.component.html',
  styleUrls: ['./parent-ctp.component.css']
})
export class ParentCtpComponent {

  

  
  onChildEvent(value:any){
    console.log("value from parent component");
    console.log(value);
  }

}
