import { Component } from '@angular/core';
import { sum } from './math';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {

  dataType(){
    let age: number = 30;
    age = 31;
    const name: string = "John";
    let message: string;
    message = "Hello, TypeScript!";
    sum(4, 5);
    console.log(Shapes.PI);
    }



}
//Function Declarations
function add(a: number, b: number): number {
  return a + b;
}
//Arrow Functions
const multiply = (a: number, b: number): number => a * b;

//interface
interface Person {
  firstName: string;
  lastName: string;
}

const person: Person = { firstName: "John", lastName: "Doe" };

//class
class Animal {
  constructor(public name: string) {}
}

const cat = new Animal("Fluffy");
