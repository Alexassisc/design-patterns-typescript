import { CamisaBasica } from './components/CamisaBasica';
import { BordadoDecorator } from './decorators/BordadoDecorator';
import { EstampaDecorator } from './decorators/EstampaDecorator';

let minhaCamisa = new CamisaBasica();
minhaCamisa = new EstampaDecorator(minhaCamisa);
minhaCamisa = new BordadoDecorator(minhaCamisa);

console.log(`Produto: ${minhaCamisa.getDescricao()}`);
console.log(`Preço Total: ${minhaCamisa.getPreco()}`);
