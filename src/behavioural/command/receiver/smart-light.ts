export class SmartLight {
  private _intensidade = 50;
  constructor(public nome: string) {}

  on(): void {
    console.log(`${this.nome} está LIGADA em ${this._intensidade}%`);
  }

  of(): void {
    console.log(`${this.nome} está DESLIGADA`);
  }

  setIntensidade(valor: number): void {
    this._intensidade = Math.min(Math.max(valor, 0), 100);
    console.log(
      `Intesidade de ${this.nome} alterada para ${this._intensidade}%`,
    );
  }
}
