import { DescontoStrategy, Produto } from './interfaces/ecommerce';

export class CarrinhoDeCompra {
  private produtos: Produto[] = [];
  private _descontoStrategy: DescontoStrategy;

  constructor(descontoStrategy: DescontoStrategy) {
    this._descontoStrategy = descontoStrategy;
  }

  set descontoStrategy(strategy: DescontoStrategy) {
    this._descontoStrategy = strategy;
  }

  adicionarProduto(...produtos: Produto[]): void {
    produtos.forEach((p) => this.produtos.push(p));
  }

  getProdutos(): Produto[] {
    return this.produtos;
  }

  getTotalSemDesconto(): number {
    return this.produtos.reduce((soma, p) => soma + p.preco, 0);
  }

  getTotalComDesconto(): number {
    const total = this.getTotalSemDesconto();
    return total - this._descontoStrategy.calcular(total);
  }
}
