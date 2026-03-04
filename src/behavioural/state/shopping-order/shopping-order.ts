import { ShoppingOrderState } from "./interfaces/shopping-orders-state";
import { OrderPending } from "./states/order-peding";

export class ShoppingOrder {
  private state: ShoppingOrderState;

  constructor() {
    this.state = new OrderPending(this); // Começa sempre como pendente
  }

  getStateName(): string {
    return this.state.getName();
  }

  setState(state: ShoppingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é: ${this.getStateName()}`);
  }

  // Métodos que delegam para o estado atual
  approvePayment(): void { this.state.approvePayment(); }
  rejectPayment(): void { this.state.rejectPayment(); }
  shipOrder(): void { this.state.shipOrder(); }
}