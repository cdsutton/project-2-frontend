import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  cors: 'no-cors',
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  addUserURL: string = 'http://ec2-3-22-185-67.us-east-2.compute.amazonaws.com:8080/TasteBass/addUser';
  loginURL: string = 'http://ec2-3-22-185-67.us-east-2.compute.amazonaws.com:8080/TasteBass/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.loginURL}`, {username, password}, httpOptions);
  }

  register(firstName: string, lastName: string, username: string, password: string, email: string): Observable<any> {
    console.log({firstName, lastName, username, password, email});
    return this.http.post(`${this.addUserURL}`, {firstName, lastName, username, password, email}, httpOptions);
  }
}