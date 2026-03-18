import { Visitor, Produto } from './interfaces';

export class Comida implements Produto {
  constructor(
    public nome: string,
    public preco: number,
    public peso: number, // Atributo específico de Comida
  ) {}

  aceitar(visitante: Visitor): number | void {
    // O Double Dispatch: A comida se identifica para o visitante
    return visitante.visitarComida(this);
  }
}

export class Cigarro implements Produto {
  constructor(
    public nome: string,
    public preco: number,
  ) {}

  aceitar(visitante: Visitor): number | void {
    return visitante.visitarCigarro(this);
  }
}

export class Bebida implements Produto {
  constructor(
    public nome: string,
    public preco: number,
    public teorAlcoolico: number, // Atributo específico de Bebida
  ) {}

  aceitar(visitante: Visitor): number | void {
    return visitante.visitarBebida(this);
  }
}