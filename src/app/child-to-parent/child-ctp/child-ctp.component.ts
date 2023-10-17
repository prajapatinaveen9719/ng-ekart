import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child-ctp',
  templateUrl: './child-ctp.component.html',
  styleUrls: ['./child-ctp.component.css']
})
export class ChildCtpComponent {

 emailAddress:string='';
 password:string='';

 @Output() 
onFormSubmit:EventEmitter<any>=new EventEmitter<any>();

  onSubmitButtonClicked() {
   console.log(this.emailAddress);
   console.log(this.password)
   this.onFormSubmit.emit(this.password);
  }



}
