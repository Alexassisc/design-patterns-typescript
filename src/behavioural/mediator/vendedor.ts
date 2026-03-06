import { Produto } from './produto';
export class Vendedor {
  public produtos: Produto[] = [];

  constructor(public nome: string) {}

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }

  receberPagamento(valor: number): void {
    console.log(
      `Vendedor [${this.nome}] recebeu o pagamento de ${valor.toFixed(2)}`,
    );
  }
}
