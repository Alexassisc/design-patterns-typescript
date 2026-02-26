export interface Produto {
  nome: string;
  preco: number;
}

export interface DescontoStrategy {
  calcular(valor: number): number;
}


