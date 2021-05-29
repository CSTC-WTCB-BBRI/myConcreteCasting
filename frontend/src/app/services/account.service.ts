import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

const headers = new HttpHeaders().set(
  'Content-Type',
  'application/json; charset=utf-8'
);

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  signupUser(user: any) {
    console.log(user);
    return this.httpClient
      .post('http://127.0.0.1:8000/api/signup', user, { headers })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
