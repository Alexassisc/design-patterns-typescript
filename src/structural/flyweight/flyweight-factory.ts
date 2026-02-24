export class Localizacao {
  constructor(
    public readonly rua: string,
    public readonly cidade: string,
  ) {}
}

export class FabricaDeLocais {
  private locais: { [key: string]: Localizacao } = {};

  getEndereco(rua: string, cidade: string) {
    const chave = `${rua}_${cidade}`;
    if (!this.locais[chave]) {
      this.locais[chave] = new Localizacao(rua, cidade);
      console.log(`Novo endereço criado e salvo na memória: ${rua}`);
    }
    return this.locais[chave];
  }

  getQuantidadeLocais(): number {
    return Object.keys(this.locais).length;
  }

  exibirLogDeMemoria(): void {
    console.log('\n--- ESTRUTURA DA MEMÓRIA (CACHE) ---');
    console.table(this.locais);
  }
}
