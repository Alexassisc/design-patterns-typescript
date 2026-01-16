import { User } from '../interfaces/user';

export class MyDataBaseClassic {
  private static _instance: MyDataBaseClassic;
  private users: User[] = [];

  private constructor() {}

  static get instance(): MyDataBaseClassic {
    if (!MyDataBaseClassic._instance) {
      MyDataBaseClassic._instance = new MyDataBaseClassic();
    }
    return MyDataBaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    this.users.forEach((user) => {
      console.log(user.name, user.age);
    });
  }
}
