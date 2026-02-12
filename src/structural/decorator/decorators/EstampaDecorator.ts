import { CamisaPersonalizada } from './CamisaPersonalizada';

export class EstampaDecorator extends CamisaPersonalizada {
  getDescricao(): string {
    return `${super.getDescricao()} + Estampa Digital`;
  }

  getPreco(): number {
    return super.getPreco() + 15;
  }
}
