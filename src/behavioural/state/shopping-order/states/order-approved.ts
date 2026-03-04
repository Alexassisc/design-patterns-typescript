import { ShoppingOrderState } from '../interfaces/shopping-orders-state';
import { ShoppingOrder } from '../shopping-order';

export class OrderApproved implements ShoppingOrderState {
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return 'Aprovado';
  }

  approvePayment(): void {
    console.log('O pedido já está aprovado.');
  }
  rejectPayment(): void {
    console.log('ERRO: Não posso recusar um pedido já aprovado.');
  }
  waitPayment(): void {
    console.log('ERRO: Pedido aprovado não pode voltar para pendente.');
  }

  shipOrder(): void {
    console.log('Enviando pedido para o cliente... 🚚');
  }
}
