import { Dispositivo } from './dispositivo';

export class TV implements Dispositivo {
  volume = 10;
  ligado = false;
  nome = 'TV';

  ligar(): void {
    this.ligado = true;
    console.log(`${this.nome} ligada`);
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
