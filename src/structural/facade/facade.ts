export class Projetor {
  ligar(): void {
    console.log('Projetor ligador');
  }
}
export class Som {
  ajustarVolume(nivel: number): void {
    console.log(`Som: Volume em ${nivel}`);
  }
}

export class Pipoqueira {
  fazerPipoca(): void {
    console.log('Pipoqueira: Estourando pipoca...');
  }
}

export class CinemaFacade {
  private projetor = new Projetor();
  private som = new Som();
  private pipoqueira = new Pipoqueira();

  comecarCinema() {
    console.log('Preparando a sessão...');
    this.pipoqueira.fazerPipoca();
    this.projetor.ligar();
    this.som.ajustarVolume(50);
  }
}
