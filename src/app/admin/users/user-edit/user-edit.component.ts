import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {


  @Input()
  user: User | undefined;
  formUser: User | undefined;
  message : string | undefined;
  password : string | undefined;
  password2 : string | undefined;
  isNameValid : boolean = false;
  ArePasswordsValid : boolean = false;
  ArePasswordsMatch : boolean = false;

  constructor(private dataService: DataService,
              private router: Router ) { }

  ngOnInit() {
    this.formUser = Object.assign({}, this.user); // create a copy of the user object to edit
    this.checkNameValidity();
    this.checkPasswordValidityAndMatch();
  }

  onSubmit() {
//    console.log("UserEditComponent onSubmit ", this.formUser);
if(this.formUser.id == null) {
  this.dataService.addUser(this.formUser, this.password).subscribe(
    user => {
      this.router.navigate(['admin', 'users'], { queryParams: { id: user.id, action : 'view'} });
    }
  );

}
else{
    this.dataService.updateUser(this.formUser).subscribe(
      user => {
        this.router.navigate(['admin', 'users'], { queryParams: { id: user.id, action : 'view'} });
      }
    );
  }
}

checkNameValidity() {
    console.log("is Name Valid",this.isNameValid);
    if(this.formUser.name) {
    this.isNameValid = this.formUser.name.trim().length > 0;
    }
    console.log("is Name Valid",this.isNameValid);

}

checkPasswordValidityAndMatch() {
if(this.formUser.id != null) {
  this.ArePasswordsValid = true; // when editing an existing user, we don't require password to be entered
  this.ArePasswordsMatch = true; // when editing an existing user, we don't require password to be entered
}else {
  this.ArePasswordsMatch = this.password === this.password2;
  if(this.password) {
    this.ArePasswordsValid = this.password.trim().length > 0;
  }
}
}

}
