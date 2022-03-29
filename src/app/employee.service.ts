import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getEmployees():Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
}
