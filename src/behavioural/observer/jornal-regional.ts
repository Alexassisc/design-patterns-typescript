import { Assinante, Sujeito } from './interface';

export class JornalRegional implements Sujeito {
  private assinantes: Assinante[] = [];
  private ultimaNoticia: string = '';

  //Observable

  // Adiciona à lista
  inscrever(assinante: Assinante): void {
    const existe = this.assinantes.includes(assinante);
    if (existe) return console.log('Assiante já está na lista.');
    this.assinantes.push(assinante);
  }
  // Remove da lista usando o filter que explicamos!
  cancelar(assinante: Assinante): void {
    this.assinantes = this.assinantes.filter((s) => s !== assinante);
    console.log('Assinante removido com sucesso!');
  }
  notificar(): void {
    for (const assinantes of this.assinantes) {
      assinantes.atualizar(this.ultimaNoticia);
    }
  }

  publicarNoticia(noticia: string): void {
    this.ultimaNoticia = noticia;
    console.log(`Jornal: "Nova edição saindo: ${noticia}"`);
    this.notificar();
  }
}
