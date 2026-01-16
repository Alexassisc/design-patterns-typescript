import { MyDataBaseClassic } from './my-database-classic';
import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDataBaseModule = {
  add(user: User): void {
    users.push(user);
  },

  remove(index: number): void {
    users.splice(index, 1);
  },

  show(): void {
    users.forEach((user) => {
      console.log(user.name, user.age);
    });
  },
};
