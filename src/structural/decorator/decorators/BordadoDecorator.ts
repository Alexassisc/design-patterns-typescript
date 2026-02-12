import { CamisaPersonalizada } from './CamisaPersonalizada';

export class BordadoDecorator extends CamisaPersonalizada {
  getDescricao(): string {
    return `${super.getDescricao()} + Camisa Bordada`;
  }

  getPreco(): number {
    return super.getPreco() + 25;
  }
}
