import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Layout, LayoutCapacity, Room } from 'src/app/models/Room';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  @Input()
  room : Room | undefined;
  selectedRoom : Room | undefined;
  layouts = Object.keys(Layout);
  layoutEnum = Layout;

  roomForm : FormGroup;

  // roomForm = new FormGroup({
  //   roomName: new FormControl('roomName'),
  //   location: new FormControl('location'),

  // });

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router)
 { }

  ngOnInit() {

    this.roomForm = this.formBuilder.group({
      roomName: [this.room.name, Validators.required],
      location: [this.room.location, [Validators.required, Validators.minLength(3)]],
    });

    // this.roomForm.patchValue({
    //   roomName: this.room.name,
    //   location: this.room.location
    // });

    for(const layout of this.layouts) {
  //    this.roomForm.addControl(`layout${layout}`, new FormControl(`layout${layout}`));
      const layoutCapacity = this.room.capacities.find(capacity => capacity.layout === Layout[layout]);
      const initialCapacity = layoutCapacity ? layoutCapacity.capacity : 0;
      this.roomForm.addControl(`layout${layout}`, this.formBuilder.control(initialCapacity));
}
  }

  onSubmit() {
    this.room.name = this.roomForm.controls['roomName'].value;
    this.room.location = this.roomForm.value['location'];
    this.room.capacities = new Array<LayoutCapacity>();
    for(const layout of this.layouts) {
      const layoutCapacity = new LayoutCapacity();
      layoutCapacity.layout = Layout[layout];
      layoutCapacity.capacity = this.roomForm.controls[`layout${layout}`].value;
      this.room.capacities.push(layoutCapacity);
    }
    console.log(this.room);
    console.log(this.roomForm);

    if(this.room.id == null) {
      this.dataService.addRoom(this.room).subscribe(next => {
        this.router.navigate(['admin', 'rooms'], { queryParams: { id: next.id, action: 'view' } });
      });
    }else{
      this.dataService.updateRoom(this.room).subscribe(next => {
        this.router.navigate(['admin', 'rooms'], { queryParams: { id: next.id, action: 'view' } });
      });
    }
  }

}
