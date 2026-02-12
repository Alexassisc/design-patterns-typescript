import { Camisa } from '../interfaces/Camisa';

export class CamisaBasica implements Camisa {
  getPreco(): number {
    return 50.0;
  }
  getDescricao(): string {
    return 'Camisa de Algodão';
  }
}
