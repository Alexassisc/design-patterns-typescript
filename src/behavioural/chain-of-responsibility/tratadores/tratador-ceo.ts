import { OrcamentoCliente } from '../modelos/orcamento-cliente.js';
import { TratadorOrcamentoBase } from './base-tratador.ts';

export class TratadorCeo extends TratadorOrcamentoBase {
  tratar(orcamento: OrcamentoCliente): OrcamentoCliente {
    console.log('O Ceo aprovou o orçamento (Decisão Final).');
    orcamento.aprovado = true;
    return orcamento;
  }
}
