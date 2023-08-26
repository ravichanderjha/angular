import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  //One way Data Communication from TS to HTML
  isDisabled = true;

  enableButton() {
    this.isDisabled = false;
  }

  disableButton() {
    this.isDisabled = true;
  }

}
