import { Component, OnInit } from '@angular/core';
//import { Directive } from '@angular/core';

import { ArrP } from './arr';

const PICARR: ArrP[] = [
  {url: "http://www.pm-frontend.com/Images/html.png"},
  {url: "http://www.pm-frontend.com/Images/css3.png"},
  {url: "http://www.pm-frontend.com/Images/bootstrap.png"},
  {url: "http://www.pm-frontend.com/Images/javascript.png"},
  {url: "http://www.pm-frontend.com/Images/jQuery.gif"},
  {url: "http://www.pm-frontend.com/Images/ajax.png"},
  {url: "http://www.pm-frontend.com/Images/postman.png"},
  {url: "http://www.pm-frontend.com/Images/kinvey.png"}
];
const NUM = [11, 12, 13, 14,];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Първенство по Силов Трибой гр.Бяла Слатина';
  arr = PICARR;
  num = NUM;
  pic: string;

  //@Input() testInput: string = "Test Input Decorator";
  
  
  ngOnInit() {
    this.pic = "http://www.pm-frontend.com/Images/kinvey.png";
  }

}



