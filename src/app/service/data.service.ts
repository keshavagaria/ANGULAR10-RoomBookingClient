import { Injectable } from '@angular/core';
import { Layout, LayoutCapacity, Room } from '../models/Room';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {



 getRooms() : Observable<Array<Room>> {
     return this.httpClient.get<Array<Room>>(`${environment.restUrl}/api/rooms`)
            .pipe(
              map(data => {
                const rooms = new Array<Room>();
                for(let room of data){
                  rooms.push(Room.fromHttp(room));
                }
                return rooms;
              })
            );
 }

 updateRoom(room: Room) : Observable<Room> {

      return of(null);
 }

 addRoom(newRoom: Room) : Observable<Room> {

      return of(null);
  }

 getUsers() : Observable<Array<User>> {
     return this.httpClient.get<Array<User>>(`${environment.restUrl}/api/users`)
            .pipe(
              map(data => {
                const users = new Array<User>();
                for(let user of data){
                  users.push(User.fromHttp(user));
                }
                return users;
              })
            );
 }

 updateUser(user: User) : Observable<User> {
     return of(null);
 }

 addUser(newUser: User, password: string) : Observable<User> {

     return of(null);
 }

  constructor(private httpClient : HttpClient ) {

    console.log(environment.restUrl);

 }

 getUserById(id: number) : Observable<User> {
    return this.httpClient.get<User>(`${environment.restUrl}/api/users/${id}`);
 }
}
