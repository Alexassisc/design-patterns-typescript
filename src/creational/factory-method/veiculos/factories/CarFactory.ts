import { Car } from '../car';
import { Veiculo } from '../veiculos';
import { VeiculoFactory } from './veiculo-factory';

export class CarFactory extends VeiculoFactory {
  protected createVeiculo(): Veiculo {
    const carros = ['Fusca', 'Gol', 'Civic', 'Corolla'];

    const randomIndex = Math.floor(Math.random() * carros.length);
    const nomeCarro = carros[randomIndex];

    return new Car(nomeCarro);
  }
}
