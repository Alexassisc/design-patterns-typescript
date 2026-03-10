import { DadosCliente } from './cliente-modelo';
import { promises as fs } from 'fs';

export abstract class AnalisadorDadosBase {
  public dadosClientes: DadosCliente[] = [];

  constructor(protected caminhoArquivo: string) {}

  // Este é o TEMPLATE METHOD (o esqueleto)
  // Ele é async porque ler arquivos demora um pouco.
  async corrigirDados(): Promise<void> {
    const dadosBrutos = await this.lerArquivo(); // Passo comum
    this.dadosClientes = this.analisarDados(dadosBrutos); // PASSO ABSTRATO (Varia)
    this.dadosClientes = this.limparDados(this.dadosClientes); // Passo comum
  }

  // Passo comum: ler o arquivo do disco
  private async lerArquivo(): Promise<string> {
    const arquivoBase = await fs.readFile(this.caminhoArquivo);
    return arquivoBase.toString();
  }

  private limparDados(cliente: DadosCliente[]): DadosCliente[] {
    return cliente.map((cliente) => {
      return {
        nome: cliente.nome.trim(),
        idade: cliente.idade.trim(),
        cpf: cliente.cpf.trim(),
      };
    });
  }
  protected abstract analisarDados(dadosBrutos: string): DadosCliente[];
}
