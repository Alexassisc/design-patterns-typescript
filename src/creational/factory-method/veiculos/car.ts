import { Veiculo } from './veiculos';

export class Car implements Veiculo {
  constructor(private name: string) {}

  stop(): void {
    console.log(`${this.name} parou!`);
  }
  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }
}
