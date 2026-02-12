import { Dispositivo } from '../implementations/dispositivo';

export abstract class Controle {
  protected dispositivo: Dispositivo;

  constructor(dispositivo: Dispositivo) {
    this.dispositivo = dispositivo;
  }

  togglePower(): void {
    if (this.dispositivo.ligado) {
      this.dispositivo.desligar();
    } else {
      this.dispositivo.ligar();
    }
  }

  aumentarVolume(): void {
    this.dispositivo.aumentarVolume();
  }

  diminuirVolume(): void {
    this.dispositivo.diminuirVolume();
  }
}
