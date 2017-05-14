import { Component } from '@angular/core';

let a = 2;
let b = 5;
let town = "Byala Slatina";
let personObj = {name: "Petyo", age: 32};
let arr = [123213, 43523542];

export class Car {
  brand: string 
  topSpeed: number
}

const CARS: Car[] = [
  { brand: "BMW", topSpeed: 280 },
  { brand: "Moskvich", topSpeed: 80 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Test Project about simple tag components in Angular 2";
  a = a;
  b = b;
  town = town;
  personObj = personObj;
  arr = arr;
  cars = CARS;
}
