import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) { }

  ngOnInit() {
  }

  editUser() {
    this.router.navigate(['admin', 'users'], { queryParams: { id: this.user.id, action : 'edit'} });
}

}
