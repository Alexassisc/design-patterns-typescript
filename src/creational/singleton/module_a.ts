import { MyDataBaseFunction } from './db/my-database-function';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Alex', age: 30 });
myDataBaseClassic.add({ name: 'Ellen', age: 25 });
myDataBaseClassic.add({ name: 'Allan', age: 28 });
myDataBaseClassic.add({ name: 'Anderson', age: 18 });

export { myDataBaseClassic };
