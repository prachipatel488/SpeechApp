import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = 'arn:aws:lambda:us-east-1:916015747809:function:speak';

  constructor(private http:HttpClient) {}

  speak(data) {
    return this.http.post(this.ENDPOINT, data);
  }
}