export interface Pagamento {
  pagar(): void;
}

class Pix implements Pagamento {
  pagar(): void {
    console.log('Pagamento com pix');
  }
}

class Cartao implements Pagamento {
  pagar(): void {
    console.log('Pagamento com cartão');
  }
}

class Boleto implements Pagamento {
  pagar(): void {
    console.log('Pagamento com boleto');
  }
}

enum tipoPagamento {
  PIX = 'pix',
  Cartao = 'cartão',
  Boleto = 'boleto',
}

class PagamentoFactory {
  static criar(tipo: tipoPagamento): Pagamento {
    switch (tipo) {
      case tipoPagamento.PIX:
        return new Pix();
      case tipoPagamento.Boleto:
        return new Boleto();
      case tipoPagamento.Cartao:
        return new Cartao();
    }
  }
}

const pagamento = PagamentoFactory.criar(tipoPagamento.PIX);
pagamento.pagar();
