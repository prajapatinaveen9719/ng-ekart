import { Component } from '@angular/core';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  ishidden:boolean=false

  inputValue:string='Value property using property binding of input tag'

  inputValue2:string='Value property using interpolation binding of input tag'

  textBoxValue:string=''


}
