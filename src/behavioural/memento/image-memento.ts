export class ImageMemento {
  constructor(
    private readonly filter: string,
    private readonly resolution: string,
  ) {}

  getFilter(): string {
    return this.filter;
  }
  getResolution(): string {
    return this.resolution;
  }
}
