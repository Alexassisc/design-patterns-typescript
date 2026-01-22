export interface Prototype<T> {
  clone(): T;
}

export class Person implements Prototype<Person> {
  public addresses: Address[] = [];

  constructor(
    public name: string,
    public age: number,
  ) {}

  clone(): Person {
    const cloned = new Person(this.name, this.age);

    cloned.addresses = this.addresses.map((address) => address.clone());

    return cloned;
  }

  addAddress(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address implements Prototype<Address> {
  constructor(
    public street: string,
    public number: number,
  ) {}

  clone(): Address {
    return new Address(this.street, this.number);
  }
}

const person1 = new Person('Alex', 30);
person1.addAddress(new Address('Rua Brasil', 15));
const copiaPerson1 = person1.clone();

person1.addresses[0].street = 'Bla bal';

copiaPerson1.name = 'Alex - Copia';
console.log(copiaPerson1);
console.log(person1);
