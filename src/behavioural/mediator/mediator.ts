import { Vendedor } from './vendedor';

export interface Mediator {
  adicionarVendedor(...vendedores: Vendedor[]): void;
  comprar(id: string): void;
  mostrarProdutos(): void;
}
