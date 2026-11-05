import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: Array<User> | undefined;
  selectedUser: User | undefined;
  action: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router
  ) { }

  ngOnInit() {
 //   this.users = this.dataService.getUsers();
    this.dataService.getUsers().subscribe(next => {
      this.users = next;
    }
  );
 //   console.log("UsersComponent ", this.users);
      this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.action = params['action'];
      if(id) {
 //       this.setRoom(+id);
        this.selectedUser = this.users.find(user => user.id === +id);

      }
    }
  );

  }

  setUser(id: number) {
    this.router.navigate(['admin', 'users'], { queryParams: { id: id, action : 'view'} });
  }

  addUser() {
    this.selectedUser = new User();
    this.router.navigate(['admin', 'users'], { queryParams: { action : 'add'} });
    console.log(this.action)

  }
}
