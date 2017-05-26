import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpTestService {
  constructor(private _http: Http) { }

  getCurrentTime() {
      return this._http.get("http://date.jsontest.com")
      .map(res => res.json());
  }

  postJSON() {
      let json = JSON.stringify({ var: "test", var2: 3 });
      let params = "json=" + json;
      let headers = new Headers();
      headers.append("Content-Type", "application/json");
      
      ////TODO: fix JSON format and post request ////////
      return this._http.post("http://validate.jsontest.com",
          params, {
            headers: headers
        })
        .map(res => res.json())
        
  }



}
