import { Camisa } from '../interfaces/Camisa';

export abstract class CamisaPersonalizada implements Camisa {
  constructor(protected camisa: Camisa) {}

  getDescricao(): string {
    return this.camisa.getDescricao();
  }
  getPreco(): number {
    return this.camisa.getPreco();
  }
}
