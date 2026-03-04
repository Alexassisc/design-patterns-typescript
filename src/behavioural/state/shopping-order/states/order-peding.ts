import { ShoppingOrderState } from '../interfaces/shopping-orders-state';
import { ShoppingOrder } from '../shopping-order';
import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-reject';

export class OrderPending implements ShoppingOrderState {
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return 'Pendente';
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
    console.log('Pagamento aprovado! Preparando para envio.');
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
    console.log('Pagamento recusado.');
  }

  waitPayment(): void {
    console.log('O pedido já está aguardando pagamento.');
  }
  shipOrder(): void {
    console.log('ERRO: Não posso enviar um pedido pendente.');
  }
}
