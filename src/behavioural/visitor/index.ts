import { Bebida, Cigarro, Comida } from './produtos';
import { CalculadoraPreco } from './taxa-visitor';
import { verificadorSegurança } from './verificador-de-segurança';

// Criamos uma coleção de objetos diferentes (estrutura complexa)
const carrinho = [
  new Bebida('Cerveja', 10, 5),
  new Comida('Salgado', 8, 0.2),
  new Cigarro('Maço X', 12),
];

const vender = new CalculadoraPreco();
const seguranca = new verificadorSegurança();

// Aplicamos o algoritmo de VENDA em todos os produtos
console.log('--- PROCESSANDO VENDA ---');
carrinho.forEach((p) => p.aceitar(vender));

// Aplicamos o algoritmo de SEGURANÇA nos mesmos produtos
// SEM precisar alterar as classes dos produtos!
console.log('\n--- CHECAGEM DE SEGURANÇA ---');
carrinho.forEach((p) => p.aceitar(seguranca));
