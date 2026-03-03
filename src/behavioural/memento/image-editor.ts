import { ImageMemento } from './image-memento';

export class ImageEditor {
  private filter: string = 'Normal';
  private resolution: string = '1920x1080';

  applyFilter(filter: string): void {
    this.filter = filter;
    console.log(`Filtro aplicado: ${this.filter}`);
  }

  setResolution(res: string): void {
    this.resolution = this.resolution;
    console.log(`Resolução alterada para: ${this.resolution}`);
  }

  save(): ImageMemento {
    return new ImageMemento(this.filter, this.resolution);
  }

  restore(memento: ImageMemento): void {
    this.filter = memento.getFilter();
    this.resolution = memento.getResolution();
    console.log(
      `Estado restaurado: Filtro ${this.filter}, Resolução ${this.resolution}`,
    );
  }

  showStatus(): void {
    console.log(
      `Status Atual: [Filtro: ${this.filter}, Resolução: ${this.resolution}]`,
    );
  }
}
