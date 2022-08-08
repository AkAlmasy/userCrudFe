import { User } from './../Interfaces/user';
import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
 })
export class UserService {
  
  constructor(private http: HttpClient) {
  }
 
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/User/getUsers');
  } 

  updateUser(updatedUser: User): Observable<User[]> {
    console.log(updatedUser);
    return this.http.put<User[]>('/api/User/modifyUser', updatedUser);
  } 

  deleteUser(userId: string): Observable<User[]> {
    return this.http.delete<User[]>(`/api/User/${userId}`);
  } 

  createUser(newUser: User): Observable<User[]> {
    return this.http.post<User[]>('/api/User/createUser', newUser);
  } 
}