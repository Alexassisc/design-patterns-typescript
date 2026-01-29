export interface Pagamento {
  pagar(): void;
}

export class Pix implements Pagamento {
  pagar(): void {
    console.log('Pagamento com pix');
  }
}

export class Cartao implements Pagamento {
  pagar(): void {
    console.log('Pagamento com cartão');
  }
}

export class Boleto implements Pagamento {
  pagar(): void {
    console.log('Pagamento com boleto');
  }
}

export enum tipoPagamento {
  Pix = 'pix',
  Cartao = 'cartão',
  Boleto = 'boleto',
}

export class PagamentoFactory {
  static criar(tipo: tipoPagamento): Pagamento {
    switch (tipo) {
      case tipoPagamento.Pix:
        return new Pix();
      case tipoPagamento.Boleto:
        return new Boleto();
      case tipoPagamento.Cartao:
        return new Cartao();
      default:
        throw new Error('Tipo de pagamento inválido');
    }
  }
}

