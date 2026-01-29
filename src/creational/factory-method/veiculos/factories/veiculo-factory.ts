import { Veiculo } from '../veiculos';

export abstract class VeiculoFactory {
  pickUp(customerName: string): void {
    const veiculo = this.createVeiculo();
    veiculo.pickUp(customerName);
    veiculo.stop();
  }

  protected abstract createVeiculo(): Veiculo;
}
