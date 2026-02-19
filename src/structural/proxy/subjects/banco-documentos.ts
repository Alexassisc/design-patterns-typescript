import { SistemaDocumentos } from './../interfaces/sistema-documento';
export class BancoDocumentos implements SistemaDocumentos {
  exibir(id: string): string {
    console.log(`Acessando Banco de Dados para buscar o documento ${id}...`);
    return `Conteudo Secreto do Documento ${id}`;
  }
}
