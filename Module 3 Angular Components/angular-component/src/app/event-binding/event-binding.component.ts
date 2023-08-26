import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  inputValue="";
  changeSearchValue(event:any){
    this.inputValue = event.target.value;
  }
}
