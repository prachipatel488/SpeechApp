import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = 'https://6e6hvhhv2l.execute-api.us-east-2.amazonaws.com/dev';

  constructor(private http:HttpClient) {}

  speak(data) {
    return this.http.post(this.ENDPOINT, data);
  }
}