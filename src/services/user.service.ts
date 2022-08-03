import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root',
 })
export class UserService {
  
  constructor(private http: HttpClient) {
  }
 


  getUsers(): Observable<any> {
    console.log(environment.backendUrl)
    return this.http.get('/api/User/getUsers');
  } 
}