import { Dispositivo } from './dispositivo';

export class Radio implements Dispositivo {
  volume = 5;
  ligado = false;
  nome = 'Rádio';

  ligar(): void {
    this.ligado = true;
    console.log(`${this.nome} ligado`);
  }

  desligar(): void {
    this.ligado = false;
    console.log(`${this.nome} desligado`);
  }

  aumentarVolume(): void {
    this.volume++;
    console.log(`${this.nome} volume: ${this.volume}`);
  }

  diminuirVolume(): void {
    this.volume--;
    console.log(`${this.nome} volume: ${this.volume}`);
  }
}
