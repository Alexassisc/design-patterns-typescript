import { Marketplace } from './marketplace';
import { Vendedor } from './vendedor';

const mediador = new Marketplace();

const v1 = new Vendedor('Loja de Esporte');
v1.adicionarProduto({ id: '1', nome: 'Bola de Futebol', preço: 60 });

const v2 = new Vendedor('Loja Tech');
v2.adicionarProduto({ id: '2', nome: 'Teclado RGB', preço: 25 });

mediador.adicionarVendedor(v1, v2);
mediador.mostrarProdutos();
mediador.comprar('2');
