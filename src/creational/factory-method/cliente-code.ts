import {
  Pagamento,
  PagamentoFactory,
  tipoPagamento,
} from './Pagamentos/pagamentos';
import { RandomCar } from './main/random-veiculo';

const nomes = ['Alex', 'Joana', 'Maria', 'Pedro'];
const nome = nomes[Math.floor(Math.random() * nomes.length)];

const factory = RandomCar();
factory.pickUp(nome);

const tipos = [tipoPagamento.Pix, tipoPagamento.Cartao, tipoPagamento.Boleto];

const tipoAleatorio = tipos[Math.floor(Math.random() * tipos.length)];

const pagamento = PagamentoFactory.criar(tipoAleatorio);
pagamento.pagar();
