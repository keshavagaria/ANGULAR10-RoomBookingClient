import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from 'src/app/models/Room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {


  @Input()
  room : Room | undefined;
  selectedRoom : Room | undefined;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  editRoom() {
    this.router.navigate(['admin', 'rooms'], { queryParams: { id: this.room.id, action : 'edit'} });

}

}
