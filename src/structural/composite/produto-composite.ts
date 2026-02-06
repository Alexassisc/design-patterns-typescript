export abstract class Produto {
  constructor() {}

  abstract getPreco(): number;

  add(produto: Produto): void {
    throw new Error('Operação não suportada');
  }

  remove(produto: Produto): void {
    throw new Error('Operação não suportada');
  }
}

class ProdutoSimples extends Produto {
  constructor(
    public name: string,
    public preco: number,
  ) {
    super();
  }

  getPreco(): number {
    return this.preco;
  }
}

class ProdutoComposto extends Produto {
  private produtos: Produto[] = [];

  add(produto: Produto): void {
    this.produtos.push(produto);
  }

  remove(produto: Produto): void {
    this.produtos.filter((p) => p !== produto);
  }

  getPreco(): number {
    return this.produtos.reduce(
      (total, produto) => total + produto.getPreco(),
      0,
    );
  }
}

const mouse = new ProdutoSimples('Mouse', 100);
const teclado = new ProdutoSimples('Teclado', 100);

const kit = new ProdutoComposto();
kit.add(mouse);
kit.add(teclado);

const monitor = new ProdutoSimples('Monitor', 900);

const carrinho = new ProdutoComposto();
carrinho.add(kit);
carrinho.add(monitor);

console.log(carrinho.getPreco());
console.log(kit);
console.log(carrinho);
