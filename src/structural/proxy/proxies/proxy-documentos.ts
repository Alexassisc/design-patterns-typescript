import { BancoDocumentos } from './../subjects/banco-documentos';
import { SistemaDocumentos } from '../interfaces/sistema-documento';

export class ProxyDocumentos implements SistemaDocumentos {
  private bancoReal: BancoDocumentos;
  private cache: Map<string, string> = new Map();
  private usuarioRole: string;

  constructor(usuarioRole: string) {
    this.bancoReal = new BancoDocumentos();
    this.usuarioRole = usuarioRole;
  }

  exibir(id: string): string | null {
    if (this.usuarioRole !== 'ADMIN') {
      console.log(
        `Bloqueado: Usuário '${this.usuarioRole}' não tem permissão.`,
      );

      return null;
    }

    if (this.cache.has(id)) {
      console.log(`CACHE: Retornando ${id} instataneamente.`);
      return this.cache.get(id)!;
    }

    const doc = this.bancoReal.exibir(id);

    if (doc !== null) {
      this.cache.set(id, doc);
    }
    return doc;
  }
}
