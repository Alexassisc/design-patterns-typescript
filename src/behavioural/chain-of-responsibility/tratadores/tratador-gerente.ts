import { OrcamentoCliente } from '../modelos/orcamento-cliente.js';
import { TratadorOrcamentoBase } from './base-tratador.ts';

export class TratadorGerente extends TratadorOrcamentoBase {
  tratar(orcamento: OrcamentoCliente): OrcamentoCliente {
    if (orcamento.total <= 5000) {
      console.log('O Gerente aprovou o orçamento');
      orcamento.aprovado = true;
      return orcamento;
    }
    return super.tratar(orcamento);
  }
}
