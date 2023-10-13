import { Component } from '@angular/core';

@Component({
  selector: 'event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  item: number = 0


  addDecrement() {
    if (this.item > 0) {
      this.item--;
    }

  }

  addIncrement() {
    this.item++
  }


}
