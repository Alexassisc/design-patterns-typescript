import { Command } from '../interfaces/command';
import { SmartLight } from '../receiver/smart-light';

export class LightIntensityCommand implements Command {
  private intesidadeAnterior: number;

  constructor(
    private readonly light: SmartLight,
    private readonly novaIntensidade: number,
  ) {
    this.intesidadeAnterior = 50;
  }

  execute(): void {
    this.light.setIntensidade(this.novaIntensidade);
  }

  undo(): void {
    this.light.setIntensidade(this.intesidadeAnterior);
  }
}
