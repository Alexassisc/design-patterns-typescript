import { MealBuilderProtocol } from '../interfaces/meal-builder-protocolo';
import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Rice, Meat } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private meal: MealBox = new MealBox();

  reset(): this {
    this.meal = new MealBox();
    return this;
  }

  makeBeverage(): this {
    this.meal.add(new Beverage('Bebida', 7));
    return this;
  }
  makeDessert(): this {
    this.meal.add(new Dessert('Sobremesa', 7));
    return this;
  }

  makeMeal(): this {
    this.meal.add(
      new Rice('Arroz', 5),
      new Beans('Feijão', 3),
      new Meat('Carne', 10)
    );
    return this;
  }

  getMeal(): MealCompositeProtocol {
    return this.meal;
  }

}
