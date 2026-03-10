import { OrcamentoCliente } from '../modelos/orcamento-cliente.js';
import { TratadorOrcamentoBase } from './base-tratador.ts';

// --- VENDEDOR ---
export class TratadorVendedor extends TratadorOrcamentoBase {
  tratar(orcamento: OrcamentoCliente): OrcamentoCliente {
    if (orcamento.total < 1000) {
      console.log('O Vendedor aprovou o orçamento!');
      orcamento.aprovado = true;
      return orcamento;
    }
    //Não posso aprovar? Uso a lógica da classe base para passar adiante
    return super.tratar(orcamento);
  }
}
