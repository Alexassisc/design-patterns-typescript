import { MealCompositeProtocol } from './meal-composite-protocol';

export interface MealBuilderProtocol {
  reset(): this;
  makeMeal(): this;
  makeBeverage(): this;
  makeDessert(): this;
  getMeal(): MealCompositeProtocol;
}
