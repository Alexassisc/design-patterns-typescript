export interface Assinante {
  atualizar(noticia: string): void;
}

export interface Sujeito {
  inscrever(assinante: Assinante): void;
  cancelar(assinante: Assinante): void;
  notificar(): void;
}
