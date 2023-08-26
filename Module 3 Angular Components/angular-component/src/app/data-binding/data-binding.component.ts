import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  //Two way Data Communication between HTML and TS
  user:any = {
    name: 'John Doe',
    age: 30,
    location: 'Cityville'
  };

  updateUser(newName: string) {
    this.user.name = newName;
  }
}
