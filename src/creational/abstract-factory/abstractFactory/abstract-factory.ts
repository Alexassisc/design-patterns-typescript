import { Pagamento, Veiculo } from '../interfaces/interfaces';

export interface TransporteFactory {
  criarVeiculo(): Veiculo;
  criarPagamento(): Pagamento;
}
