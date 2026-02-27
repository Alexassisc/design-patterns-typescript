import { LightIntensityCommand } from './commands/light-intensity';
import { LightPowerCommand } from './commands/light-power';
import { RemoteControl } from './invoker/remote-control';
import { SmartLight } from './receiver/smart-light';

// 1. Criamos as luzes reais
const luzBanheiro = new SmartLight('Luz do Banheiro');
const luzQuarto = new SmartLight('Luz do Quarto');

// 2. Criamos o controle
const controle = new RemoteControl();

// 3. Configuramos os comandos no controle
controle.addCommand('ligar_banheiro', new LightPowerCommand(luzBanheiro));
controle.addCommand('ligar_quarto', new LightPowerCommand(luzQuarto));
controle.addCommand('quarto_leitura', new LightIntensityCommand(luzQuarto, 20));
controle.addCommand('quarto_festa', new LightIntensityCommand(luzQuarto, 100));

// --- SIMULANDO O USO ---

controle.executeCommand('ligar_banheiro'); // Saída: Luz do Banheiro está LIGADA em 50%
controle.executeCommand('ligar_quarto'); // Saída: Luz do Quarto está LIGADA em 50%
controle.executeCommand('quarto_leitura'); // Saída: Intensidade de Luz do Quarto alterada para 20%

// O usuário se arrependeu e quer desfazer a intensidade:
controle.undo(); // Saída: Intensidade de Luz do Quarto alterada para 50%
