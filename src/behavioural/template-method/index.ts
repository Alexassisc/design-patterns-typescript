import { resolve } from 'path';
import { AnalisadorTxt } from './analisador-txt';
import { AnalisadorJson } from './analisador-json';

async function executar() {
  const caminhoTxt = resolve(__dirname, 'files', 'customer.txt');
  const analisadorTxt = new AnalisadorTxt(caminhoTxt);
  await analisadorTxt.corrigirDados();
  console.log('-----DADOS DO TXT-----');
  console.table(analisadorTxt.dadosClientes);

  console.log();

  const caminhoJson = resolve(__dirname, 'files', 'customer.json');
  const analisadorJson = new AnalisadorJson(caminhoJson);
  await analisadorJson.corrigirDados();
  console.log('-----DADOS DO JSON-----');
  console.table(analisadorJson.dadosClientes);
}

executar();
