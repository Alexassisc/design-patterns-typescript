import { MyDataBaseFunction } from './db/my-database-function';
import './module_a';

const myDataBaseClassic = MyDataBaseFunction;
myDataBaseClassic.add({ name: 'Roberto', age: 30 });
myDataBaseClassic.add({ name: 'Joana', age: 25 });
myDataBaseClassic.add({ name: 'Luíza', age: 28 });
myDataBaseClassic.show();
