import { ProxyDocumentos } from './proxies/proxy-documentos';

// Teste com usuário comum (Vai imprimir apenas o "Bloqueado")
const sistema = new ProxyDocumentos('USER');
const resultadoUser = sistema.exibir('Relatorio_2026');
console.log('Retorno para User:', resultadoUser);

console.log('--------------');

// Teste com ADMIN (Vai buscar no banco e retornar a string)
const sistemaAdm = new ProxyDocumentos('ADMIN');

// 1. Chamada: Vai buscar no banco e retornar o valor
const documento = sistemaAdm.exibir('Relatorio_2026');

// 2. AGORA SIM: Imprimimos o que o método nos devolveu
console.log('Documento recebido:', documento);

// 3. Teste de Cache (Para provar que o Proxy funciona)
console.log('--- Segunda chamada (Cache) ---');
const documentoCache = sistemaAdm.exibir('Relatorio_2026');
console.log('Documento vindo do cache:', documentoCache);
