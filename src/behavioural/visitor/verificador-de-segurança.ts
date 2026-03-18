import { Visitor } from './interfaces';
import { Bebida, Comida, Cigarro } from './produtos';

export class verificadorSegurança implements Visitor {
  visitarBebida(b: Bebida): void {
    // Usa o atributo específico que só Bebida tem
    if (b.teorAlcoolico > 0) {
      console.log('Alerta: Pedir RG para a bebida!');
    }
  }

  visitarComida(c: Comida): void {
    // Implementação vazia: Comida não tem restrição de segurança
    // Mas o método PRECISA existir por causa da interface
  }

  visitarCigarro(cig: Cigarro): void {
    console.log('Alerta: Proibida venda para menores de 18 anos!');
  }
}
