import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormResetService } from 'src/app/form-reset.service';
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
  action: string | undefined;
  loading: boolean = true;
  message: string = 'Please wait... Loading rooms...';
  reloadAttempts: number = 0;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private router: Router,
              private formResetService: FormResetService) {}

   loadData(){
      this.dataService.getRooms().subscribe(next => {
           this.rooms = next;
           this.loading = false;
           this.processRoom();
         },
         error => {
           if(error.status === 402) {
             this.message = 'Unauthorized. Please log in.';
           } else {
              this.reloadAttempts++;
              if(this.reloadAttempts <= 10) {
                this.message = 'Error loading rooms. Retrying...';
                this.loadData();
              }else{
                this.message = 'Error loading rooms. Please Contact Support.';
              }

           }

         }
       );

     }

     processRoom() {
      this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.action = params['action'];
      if(id) {
 //       this.setRoom(+id);
        this.selectedRoom = this.rooms.find(room => room.id === +id);
      }
    }
  );
}

  ngOnInit() {
      this.loadData();
  }

  setRoom(id: number) {
    this.router.navigate(['admin', 'rooms'], { queryParams: { id: id, action: 'view' } });
  }

  addRoom() {
      this.selectedRoom = new Room();
      this.router.navigate(['admin', 'rooms'], { queryParams: { action : 'add'} });
      console.log(this.action)

    }
}
