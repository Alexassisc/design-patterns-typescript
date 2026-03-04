import { ShoppingOrderState } from '../interfaces/shopping-orders-state';
import { ShoppingOrder } from '../shopping-order';

export class OrderRejected implements ShoppingOrderState {
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return 'Recusado';
  }

  approvePayment(): void {
    console.log('ERRO: Não posso aprovar um pedido recusado.');
  }
  rejectPayment(): void {
    console.log('O pedido já está recusado.');
  }
  waitPayment(): void {
    console.log('ERRO: Pedido recusado não pode voltar a ser pendente.');
  }
  shipOrder(): void {
    console.log('ERRO: Não posso enviar um pedido que foi recusado.');
  }
}
