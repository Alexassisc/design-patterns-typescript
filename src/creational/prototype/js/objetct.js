const personPrototype = {
  fistName: 'Alex',
  lastName: 'Assis',
  age: 30,

  fullName() {
    return `${this.fistName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.fistName = 'Alex - Copia';

console.log(personPrototype.fullName());
console.log(anotherPerson.fistName);
console.log(personPrototype.fistName);
