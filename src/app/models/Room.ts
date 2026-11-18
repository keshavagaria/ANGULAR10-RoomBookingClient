export class Room{
    id: number;
    name: string;
    location: string;
    capacities = new Array<LayoutCapacity>();

    static fromHttp(room: Room){
    const newRoom = new Room();
    newRoom.id = room.id;
    newRoom.name = room.name;
    newRoom.location = room.location;
    newRoom.capacities = new Array<LayoutCapacity>();
    for(let layoutCapacity of room.capacities){
      newRoom.capacities.push(LayoutCapacity.fromHttp(layoutCapacity));
    }
    return newRoom;
  }

 }

export class LayoutCapacity{

    id: number;
    layout: Layout;
    capacity: number;

    static fromHttp(layoutCapacity: LayoutCapacity){
      const newLayoutCapacity = new LayoutCapacity();
      newLayoutCapacity.layout = Layout[layoutCapacity.layout];
      newLayoutCapacity.capacity = layoutCapacity.capacity;
      return newLayoutCapacity;
    }
 }

export enum Layout{
        THEATER = "Theater",
        USHAPE = "U-Shape",
        BOARD = "Board Meeting"

}
