import { Vendedor } from '../../mediator/vendedor';
import { OrcamentoCliente } from '../modelos/orcamento-cliente';
import { TratadorCeo } from './tratador-ceo';
import { TratadorDiretor } from './tratador-diretor';
import { TratadorGerente } from './tratador-gerente';
import { TratadorVendedor } from './tratador-vendedor';

const vendedor = new TratadorVendedor();
const gerente = new TratadorGerente();
const diretor = new TratadorDiretor();
const ceo = new TratadorCeo();

vendedor.setProximo(gerente).setProximo(diretor).setProximo(ceo);

const orcamentoHospedagem = new OrcamentoCliente(120);
vendedor.tratar(orcamentoHospedagem);

if (orcamentoHospedagem.aprovado) {
  console.log('O orçamento está pronto para o cliente');
}
