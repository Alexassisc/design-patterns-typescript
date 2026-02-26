import { DescontoStrategy } from '../interfaces/ecommerce';

export class DescontoPadrao implements DescontoStrategy {
  calcular(valor: number): number {
    return valor >= 200 ? valor * 0.05 : 0;
  }
}

export class DescontoVip implements DescontoStrategy {
  calcular(valor: number): number {
    return valor >= 1000 ? valor * 0.15 : 0;
  }
}
