import { EstanteDeLivros } from './estante-de-livros';
import { IteratorInverso } from './iterator-inverso';

const minhaEstante = new EstanteDeLivros();
minhaEstante.adicionar('Livro A', 'Livro B', 'Livro C', 'Livro D', 'Livro E');
console.log(minhaEstante);

// 1. Desestruturação (Usa o iterator internamente)
const [primeiro, segundo] = minhaEstante;
console.log('PEGUEI OS DOIS PRIMEIROS:', primeiro, segundo);

// CUIDADO: O iterador agora parou no terceiro item!
console.log('--- CONTINUANDO DE ONDE PAROU ---');
const [terceiro, ...resto] = minhaEstante;
console.log('TERCEIRO:', terceiro, 'RESTO:', resto);

// 2. Resetando para usar no for...of
minhaEstante.resetarIterator();
console.log('--- FOR...OF PADRÃO ---');
for (const livro of minhaEstante) {
  console.log(livro);
}

// 3. Mudando para o Iterador Inverso
minhaEstante.mudarIterator(new IteratorInverso(minhaEstante));
console.log('--- FOR...OF INVERSO ---');
for (const livro of minhaEstante) {
  console.log(livro);
}
