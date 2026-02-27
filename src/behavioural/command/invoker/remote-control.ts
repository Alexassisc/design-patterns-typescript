import { Command } from '../interfaces/command';

export class RemoteControl {
  private commands: { [id: string]: Command } = {};
  private history: Command[] = [];

  addCommand(id: string, command: Command): void {
    this.commands[id] = command;
  }

  executeCommand(id: string): void {
    if (this.commands[id]) {
      this.commands[id].execute();
      this.history.push(this.commands[id]);
    }
  }

  undo(): void {
    const lastCommand = this.history.pop();
    if (lastCommand) {
      console.log(`--- Desfazendo últuma ação ----`);
      lastCommand.undo();
    }
  }
}
