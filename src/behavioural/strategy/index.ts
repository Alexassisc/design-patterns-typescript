import { CarrinhoDeCompra } from './shopping-cart';
import { DescontoPadrao, DescontoVip } from './strategies/desconto';

const carrinho = new CarrinhoDeCompra(new DescontoPadrao());

carrinho.adicionarProduto(
  { nome: 'Teclado Mecanico', preco: 450 },
  { nome: 'Mouse Gamer', preco: 250 },
  { nome: 'Monitor', preco: 1200 },
);

console.log('--- E-COMMERCE CHECKOUT ---');
console.log(
  'Produtos:',
  carrinho
    .getProdutos()
    .map((p) => `${p.nome} (R$ ${p.preco})`)
    .join(', '),
);
console.log('Total Bruto: R$', carrinho.getTotalSemDesconto());

// Testando estratégia padrão (5%)
console.log('Total com Desconto Padrão: R$', carrinho.getTotalComDesconto());

// Mudando para VIP em tempo de execução (15%)
carrinho.descontoStrategy = new DescontoVip();
console.log('Total com Desconto VIP: R$', carrinho.getTotalComDesconto());
 