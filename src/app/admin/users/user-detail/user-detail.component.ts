import { Component, Input, OnInit } from '@angular/core';
import { Room } from 'src/app/models/Room';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user : User | undefined;

  constructor() { }

  ngOnInit() {
  }

}
