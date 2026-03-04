import { ShoppingOrder } from './shopping-order';

const pedido = new ShoppingOrder();

console.log(`--- Início do Pedido (Estado: ${pedido.getStateName()}) ---`);

// 1. Tentar enviar sem pagar
pedido.shipOrder(); 
// Saída esperada: ERRO: Não posso enviar um pedido pendente.

// 2. Aprovar o pagamento (Corrigido: approvePayment)
pedido.approvePayment(); 
// Saída esperada: Pagamento aprovado! O estado agora é: Aprovado

// 3. Enviar agora que está aprovado
pedido.shipOrder(); 
// Saída esperada: Enviando pedido para o cliente... 🚚

console.log('\n--- Tentativa de Alteração Inválida ---');

// 4. Tentar recusar um pedido que já foi aprovado e enviado
pedido.rejectPayment(); 
// Saída esperada: ERRO: Não posso recusar um pedido já aprovado.

// 5. Tentar enviar de novo
pedido.shipOrder();
// Saída esperada: Enviando pedido para o cliente... 🚚 (Ou "O pedido já foi enviado")