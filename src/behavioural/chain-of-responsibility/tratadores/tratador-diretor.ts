import { OrcamentoCliente } from '../modelos/orcamento-cliente.js';
import { TratadorOrcamentoBase } from './base-tratador.ts';

export class TratadorDiretor extends TratadorOrcamentoBase {
  tratar(orcamento: OrcamentoCliente): OrcamentoCliente {
    if (orcamento.total <= 50000) {
      console.log('O Diretor aprovou o orçamento');
      orcamento.aprovado = true;
      return orcamento;
    }

    return super.tratar(orcamento);
  }
}
