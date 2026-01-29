import { Veiculo } from './../veiculos/veiculos';
import { BicicletaFactory } from '../veiculos/factories/BikeFactory';
import { CarFactory } from '../veiculos/factories/CarFactory';
import { VeiculoFactory } from '../veiculos/factories/veiculo-factory';

export function RandomCar(): VeiculoFactory {
  const factories: VeiculoFactory[] = [
    new CarFactory(),
    new BicicletaFactory(),
  ];

  const randomIndex = Math.floor(Math.random() * factories.length);
  return factories[randomIndex];

}
