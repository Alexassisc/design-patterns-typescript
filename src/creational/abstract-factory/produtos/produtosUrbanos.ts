import { Pagamento, Veiculo } from '../interfaces/interfaces';

export class CarroPopular implements Veiculo {
  dirigir(): void {
    console.log('Dirigindo carro popular');
  }
}

export class Pix implements Pagamento {
  pagar(): void {
    console.log('Pagamento com Pix');
  }
}
