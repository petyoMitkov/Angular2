import { Component, OnInit } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
  providers: [HttpTestService]
})
export class HttpTestComponent implements OnInit {
  getData: string;
  postData: string;


  constructor(private _httpService: HttpTestService) { }

  ngOnInit() {
  }

  onTestGet() {
    this._httpService.getCurrentTime()
      .subscribe(
        data => this.getData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")         
      );
  }
  onTestPost() { 
    this._httpService.postJSON()
      .subscribe(
        data => this.postData = JSON.stringify(data),
        error => alert(error),
        () => console.log("Finished")         
      );
  }

}
