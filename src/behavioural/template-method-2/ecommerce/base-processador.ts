export abstract class ProcessadorCompra {
  public processar(): void {
    this.adicionarAoCarrinho();
    this.calcularFrete();
    this.realizarPagamento();
    this.notificarCliente();
  }

  protected adicionarAoCarrinho(): void {
    console.log('Produto adicionado ao carrinho');
  }

  protected notificarCliente(): void {
    console.log('E-mail de confirmação enviado ao cliente');
  }

  protected abstract calcularFrete(): void;
  protected abstract realizarPagamento(): void;
}
