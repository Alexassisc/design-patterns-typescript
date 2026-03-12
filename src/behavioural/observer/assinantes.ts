import { Assinante } from './interface';

// Observers

export class LeitorCurioso implements Assinante {
  constructor(public nome: string) {}

  atualizar(noticia: string): void {
    console.log(
      `${this.nome} recebeu a notificação e postou no Status: ${noticia}`,
    );
  }
}

export class LeitorCritico implements Assinante {
  atualizar(noticia: string): void {
    console.log(`Analisando criticamente a manchete: ${noticia}...`);
  }
}
