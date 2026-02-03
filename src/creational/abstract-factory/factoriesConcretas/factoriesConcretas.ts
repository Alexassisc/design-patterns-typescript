import { TransporteFactory } from '../abstractFactory/abstract-factory';
import { Veiculo, Pagamento } from '../interfaces/interfaces';
import { CarroLuxo, CartaoPlatinum } from '../produtos/produtosLuxo';
import { CarroPopular, Pix } from '../produtos/produtosUrbanos';

export class TransporteUrbanoFactory implements TransporteFactory {
  criarVeiculo(): Veiculo {
    return new CarroPopular();
  }
  criarPagamento(): Pagamento {
    return new Pix();
  }
}

export class TransporteLuxoFactory implements TransporteFactory {
  criarVeiculo(): Veiculo {
    return new CarroLuxo();
  }
  criarPagamento(): Pagamento {
    return new CartaoPlatinum();
  }
}
