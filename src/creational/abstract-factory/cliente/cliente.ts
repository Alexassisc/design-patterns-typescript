import {
  TransporteLuxoFactory,
  TransporteUrbanoFactory,
} from '../factoriesConcretas/factoriesConcretas';
import { TransporteFactory } from './../abstractFactory/abstract-factory';

function usarTransporte(factory: TransporteFactory) {
  const veiculo = factory.criarVeiculo();
  const pagamento = factory.criarPagamento();

  veiculo.dirigir();
  pagamento.pagar();
}

usarTransporte(new TransporteUrbanoFactory());
console.log('--------------');
usarTransporte(new TransporteLuxoFactory());
