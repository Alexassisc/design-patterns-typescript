import { Visitor } from './interfaces';
import { Bebida, Comida, Cigarro } from './produtos';

export class CalculadoraPreco implements Visitor {
  visitarBebida(b: Bebida): number {
    const total = b.preco + b.preco * 0.15; // Taxa de 15%
    console.log(`Venda Bebida: ${b.nome} - Total: R$ ${total.toFixed(2)}`);
    return total; // Retorna o valor para ser usado em cálculos externos
  }

  visitarComida(c: Comida): number {
    const total = c.preco + c.preco * 0.05; // Taxa de 5%
    console.log(`Venda Comida: ${c.nome} - Total: R$ ${total.toFixed(2)}`);
    return total;
  }

  visitarCigarro(cig: Cigarro): number {
    const total = cig.preco + cig.preco * 1.0; // Taxa de 100%
    console.log(`Venda Cigarro: ${cig.nome} - Total: R$ ${total.toFixed(2)}`);
    return total;
  }
}