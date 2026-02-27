import { Command } from '../interfaces/command';
import { SmartLight } from '../receiver/smart-light';

export class LightPowerCommand implements Command {
  constructor(private readonly light: SmartLight) {}
  undo(): void {
    return this.light.of();
  }
  execute(): void {
    return this.light.on();
  }
}
