import { Bebida, Cigarro, Comida } from './produtos';

// Define o que um Produto PRECISA ter para ser "visitável"
export interface Produto {
  // Aceita qualquer visitante que siga o contrato Visitor
  // Retorna number (preço) OU void (nada), dependendo da operação
  aceitar(visitante: Visitor): number | void;
}

// Define as habilidades que um Visitante deve ter
export interface Visitor {
  // O visitante precisa saber lidar especificamente com cada tipo de classe
  visitarBebida(b: Bebida): number | void;
  visitarComida(c: Comida): number | void;
  visitarCigarro(cig: Cigarro): number | void;
}
