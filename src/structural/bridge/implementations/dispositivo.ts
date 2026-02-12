export interface Dispositivo {
  nome: string;
  volume: number;
  ligado: boolean;

  ligar(): void;
  desligar(): void;
  aumentarVolume(): void;
  diminuirVolume(): void;
}
