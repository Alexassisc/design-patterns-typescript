import { Pagamento, Veiculo } from '../interfaces/interfaces';

export class CarroLuxo implements Veiculo {
  dirigir(): void {
    console.log('Dirigindo carro de Luxo');
  }
}

export class CartaoPlatinum implements Pagamento {
  pagar(): void {
    console.log('Pagamento com cartão platinum');
  }
}
