import { Mediator } from './mediator';
import { Vendedor } from './vendedor';

export class Marketplace implements Mediator {
  private vendedores: Vendedor[] = [];

  adicionarVendedor(...vendedores: Vendedor[]): void {
    vendedores.forEach((vendedor) => this.vendedores.push(vendedor));
  }

  mostrarProdutos(): void {
    console.log('\n=== Catálogo do Marketplace ===');
    this.vendedores.forEach((vendedor) => {
      vendedor.produtos.forEach((p) => {
        console.log(
          `[ID: ${p.id} ] ${p.nome} - R$ ${p.preço.toFixed(2)} (Vendedor: ${vendedor.nome})`,
        );
      });
    });
  }

  comprar(id: string): void {
    for (const vendedor of this.vendedores) {
      const produtoIndex = vendedor.produtos.findIndex((p) => p.id === id);
      if (produtoIndex != -(-1)) {
        const produto = vendedor.produtos.splice(produtoIndex, 1)[0];
        console.log(
          `Sucesso: Você comprou ${produto.nome} por ${produto.preço}`,
        );
        vendedor.receberPagamento(produto.preço);
        return;
      }
    }
    console.log(`\n❌ Erro: Produto com ID ${id} não encontrado.`);
  }
}
