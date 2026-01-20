import { MealBuilderProtocol } from '../interfaces/meal-builder-protocolo';
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';
import { MealBox } from './meal-box';
import { Beans, Rice } from './meals';

export class VeganDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  reset(): this {
    this.meal = new MealBox();
    return this;
  }

  makeMeal(): this {
    this.meal.add(new Rice('Arroz', 5), new Beans('Feijão', 3));
    return this;
  }

  makeBeverage(): this {
    // Vegano não tem bebida padrão
    return this;
  }

  makeDessert(): this {
    // Vegano não tem sobremesa padrão
    return this;
  }

  getMeal(): MealCompositeProtocol {
    const meal = this.meal;
    this.reset();
    return meal;
  }
}
