import { Injectable } from '@angular/core';
import { Layout, LayoutCapacity, Room } from '../models/Room';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {



 getRooms() : Observable<Array<Room>> {
     return of(null);
 }

 updateRoom(room: Room) : Observable<Room> {

      return of(null);
 }

 addRoom(newRoom: Room) : Observable<Room> {

      return of(null);
  }

 getUsers() : Observable<Array<User>> {
     return of(null);
 }

 updateUser(user: User) : Observable<User> {
     return of(null);
 }

 addUser(newUser: User, password: string) : Observable<User> {

     return of(null);
 }

  constructor() {

    console.log(environment.restUrl);


 }
}
