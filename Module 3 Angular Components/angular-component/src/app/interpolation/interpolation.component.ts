import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {  
  //One way data Communicatin - from TS to HTML
  user = {
    name: 'John Doe',
    age: 30,
    location: 'Cityville'
  };

}
