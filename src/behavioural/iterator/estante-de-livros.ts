import { IteratorProtocolo } from './protocolo-iterator';

export class EstanteDeLivros {
  private _itens: string[] = [];
  // O iterador atual pode ser qualquer um que siga o protocolo
  private iterator: IteratorProtocolo<string>;

  constructor() {
    this.iterator = this.criarIteratorPadrao();
  }

  adicionar(...livros: string[]): void {
    livros.forEach((livro) => this._itens.push(livro));
  }

  get itens(): string[] {
    return this._itens;
  }

  get quantidade(): number {
    return this._itens.length;
  }

  // Altera a estratégia de busca (Ex: mudar para Inverso)
  mudarIterator(novoIterator: IteratorProtocolo<string>): void {
    this.iterator = novoIterator;
  }

  resetarIterator(): void {
    this.iterator.reset();
  }

  // Criamos um iterador padrão (do primeiro ao último) "na mão"
  private criarIteratorPadrao(): IteratorProtocolo<string> {
    let indice = 0;
    return {
      next: () => {
        const valor = this._itens[indice++];
        const acabou = indice > this._itens.length;
        return { value: valor, done: acabou };
      },

      reset: () => {
        indice = 0;
      },
    };
  }

  // A "chave mágica" que permite usar for...of e [a, b, ...rest]
  [Symbol.iterator](): IteratorProtocolo<string> {
    return this.iterator;
  }
}
