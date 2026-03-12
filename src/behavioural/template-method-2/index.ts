import { CompraNacional } from './ecommerce/compra-internacional';
import { CompraInternacional } from './ecommerce/compra-nacional';

const pedidoBR = new CompraNacional();
const pedidoInter = new CompraInternacional();

console.log('--- PROCESSANDO PEDIDO BRASIL ---');
pedidoBR.processar();

console.log('\n--- PROCESSANDO PEDIDO EUROPA ---');
pedidoInter.processar();
