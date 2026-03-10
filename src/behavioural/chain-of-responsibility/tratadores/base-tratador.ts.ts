import { OrcamentoCliente } from '../modelos/orcamento-cliente';

export abstract class TratadorOrcamentoBase {
  protected proximoTratador: TratadorOrcamentoBase | null = null;

  // Define quem é o próximo na hierarquia
  setProximo(tratador: TratadorOrcamentoBase): TratadorOrcamentoBase {
    this.proximoTratador = tratador;
    return tratador;
  }

  // Comportamento padrão: se não eu não tratei, tento passar para o próximo
  tratar(orcamento: OrcamentoCliente): OrcamentoCliente {
    if (this.proximoTratador) {
      return this.proximoTratador.tratar(orcamento);
    }
    return orcamento;
  }
}
