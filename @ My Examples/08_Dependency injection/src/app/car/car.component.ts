import { Component, OnInit } from '@angular/core';

import { Car, Engine, Tires } from './car';
import { simpleCar, superCar, testCar } from './car-creations';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [Car, Engine, Tires]
})
export class CarComponent implements OnInit {
  simpleCar = simpleCar();
  superCar = superCar(); 
  testCar = testCar();

  constructor(public car: Car) { }

  ngOnInit() {
  }

}
