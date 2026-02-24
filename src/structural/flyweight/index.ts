import { FabricaDeLocais } from './flyweight-factory';
import { Pedido } from './pedido';

const fabrica = new FabricaDeLocais();

const pedidos = [
  new Pedido(
    1,
    'Alice',
    '101',
    fabrica.getEndereco('Av. Paulista', 'São Paulo'),
  ),
  new Pedido(2, 'Bob', '500', fabrica.getEndereco('Av. Paulista', 'São Paulo')),
  new Pedido(
    3,
    'Charlie',
    '12',
    fabrica.getEndereco('Av. Paulista', 'São Paulo'),
  ),
  new Pedido(4, 'Dani', '88', fabrica.getEndereco('Rua Augusta', 'São Paulo')),
];

console.log('\n--- LISTAGEM DE PEDIDOS ---');
pedidos.forEach((p) => p.exibir());

console.log(`\nTotal de pedidos criados: ${pedidos.length}`);
console.log(
  `Total de objetos Localizacao na memória: ${fabrica.getQuantidadeLocais()}`,
);

console.log(fabrica.exibirLogDeMemoria());
