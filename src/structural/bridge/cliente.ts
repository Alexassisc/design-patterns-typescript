import { ControleSimples } from './abstractions/controle-simples';
import { Radio } from './implementations/radio';
import { TV } from './implementations/tv';

const tv = new TV();
const radio = new Radio();

const controleTv = new ControleSimples(tv);
const controleRadio = new ControleSimples(radio);

controleTv.togglePower();
controleTv.aumentarVolume();

controleRadio.togglePower();
controleRadio.diminuirVolume();
