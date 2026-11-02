import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToRoomsAdmin() {
    this.router.navigate(['admin','rooms']);
  }

  navigateToUsersAdmin() {
    this.router.navigate(['admin','users']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
