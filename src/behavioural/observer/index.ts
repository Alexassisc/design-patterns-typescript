import { JornalRegional } from './jornal-regional';
import { LeitorCurioso, LeitorCritico } from './assinantes';

const jornal = new JornalRegional();

// Criando os leitores
const joao = new LeitorCurioso('João Silva');
const maria = new LeitorCurioso('Maria Oliveira');
const anaCritica = new LeitorCritico();

// Inscrevendo no jornal
jornal.inscrever(joao);
jornal.inscrever(maria);
jornal.inscrever(anaCritica);

// Primeira notícia
jornal.publicarNoticia('Design Patterns são essenciais para seniors!');

// João decide cancelar a assinatura
jornal.cancelar(joao);

// Segunda notícia (João não receberá mais)
jornal.publicarNoticia('Aprender Observer facilita o uso de eventos no JS.');
