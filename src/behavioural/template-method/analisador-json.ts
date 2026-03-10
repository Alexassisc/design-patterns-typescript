import { AnalisadorDadosBase } from './analisador-dados-base';
import { DadosCliente } from './cliente-modelo';

export class AnalisadorJson extends AnalisadorDadosBase {
  protected analisarDados(dadosBrutos: string): DadosCliente[] {
    // No JSON, basta usar o JSON.parse nativo
    return JSON.parse(dadosBrutos);
  }
}
