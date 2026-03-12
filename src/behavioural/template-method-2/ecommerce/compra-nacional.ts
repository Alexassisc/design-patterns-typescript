import { ProcessadorCompra } from './base-processador';

export class CompraInternacional extends ProcessadorCompra {
  protected calcularFrete(): void {
    console.log(
      'Frete Internacional: R$ 150,00 via DHL (com taxas alfandegárias).',
    );
  }

  protected realizarPagamento(): void {
    console.log('Pagamento: Processando via Stripe (Cartão Internacional).');
  }
}
