import { Bicicleta } from '../bicicleta';
import { Veiculo } from '../veiculos';
import { VeiculoFactory } from './veiculo-factory';

export class BicicletaFactory extends VeiculoFactory {
  protected createVeiculo(): Veiculo {
    return new Bicicleta('Bicicleta azul');
  }
}
