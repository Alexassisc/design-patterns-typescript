import { RandomCar } from './main/random-veiculo';

const nomes = ['Alex', 'Joana', 'Maria', 'Pedro'];
const nome = nomes[Math.floor(Math.random() * nomes.length)];

const factory = RandomCar();
factory.pickUp(nome);
