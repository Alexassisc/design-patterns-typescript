import { Localizacao } from './flyweight-factory';
export class Pedido {
  constructor(
    private id: number,
    private nomeCliente: string,
    private numeroCasa: string,
    private local: Localizacao,
  ) {}

  exibir() {
    console.log(
      `Pedido #${this.id}: ${this.nomeCliente} | Endereço: ${this.local.rua}, nº ${this.numeroCasa} - ${this.local.cidade}`,
    );
  }
}
