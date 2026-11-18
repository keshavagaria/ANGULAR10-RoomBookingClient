export class User {
  id: number;
  name: string;

  static fromHttp(user : User) : User{
    let newUser = new User();
    newUser.id = user.id;
    newUser.name = user.name;
    return newUser;
  }
}
