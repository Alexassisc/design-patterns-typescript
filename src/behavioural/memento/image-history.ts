import { ImageEditor } from './image-editor';
import { ImageMemento } from './image-memento';

export class ImageHistory {
  private mementos: ImageMemento[] = [];
  constructor(private readonly editor: ImageEditor) {}

  backup(): void {
    console.log('Salvando estado no histórico...');
    this.mementos.push(this.editor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log('Sem estados para desfazer.');
      return;
    }
    this.editor.restore(memento);
  }
}
