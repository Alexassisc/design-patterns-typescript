import { ProcessadorCompra } from './base-processador';

export class CompraNacional extends ProcessadorCompra {
  protected calcularFrete(): void {
    console.log('Frete nacional: R$ 15,00 via Sedex');
  }

  protected realizarPagamento(): void {
    console.log('Pagamento: Processando via PIX');
  }
}
