import { EstanteDeLivros } from './estante-de-livros';
import { IteratorProtocolo } from './protocolo-iterator';

export class IteratorInverso implements IteratorProtocolo<string> {
  private posicao: number = 0;

  constructor(private estante: EstanteDeLivros) {
    this.reset();
  }
  // Volta o "ponteiro" para o último livro
  reset(): void {
    this.posicao = this.estante.quantidade - 1;
  }

  // O motor do JS chama esse método no for...of
  next(): IteratorResult<string> {
    const livro = this.estante.itens[this.posicao];
    const acabou = this.posicao < 0;

    if (!acabou) {
      this.posicao--;
      return { value: livro, done: false };
    }
    return { value: undefined, done: true };
  }
}
