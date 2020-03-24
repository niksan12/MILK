import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {

  //dependency Injection into our angular project to bring Http Client to call API from here
 values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    //Use observable subscription to get stream of data
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
       console.log(error);
      }
    );

  }

}
