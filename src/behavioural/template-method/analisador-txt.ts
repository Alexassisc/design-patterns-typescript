import { AnalisadorDadosBase } from './analisador-dados-base';
import { DadosCliente } from './cliente-modelo';

export class AnalisadorTxt extends AnalisadorDadosBase {
  protected analisarDados(dadosBrutos: string): DadosCliente[] {
    // No TXT, o professor geralmente separa por vírgula ou tabulação
    return dadosBrutos.split('\n').map((linha) => {
      const [nome, idade, cpf] = linha.split('\t'); // Separado por TAB
      return { nome, idade, cpf };
    });
  }
}
