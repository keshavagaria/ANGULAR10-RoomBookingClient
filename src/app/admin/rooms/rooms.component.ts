import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/models/Room';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Array<Room> = [];
  selectedRoom: Room | undefined;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
 //   this.rooms = this.dataService.getRooms();
    this.dataService.getRooms().subscribe(next => {
      this.rooms = next;
    }
  );
    // console.log("RoomsComponent ",this.rooms);
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if(id) {
 //       this.setRoom(+id);
        this.selectedRoom = this.rooms.find(room => room.id === +id);
      }
    }
  );

  }

  setRoom(id: number) {
    this.router.navigate(['admin', 'rooms'], { queryParams: { id: id } });
  }
}
