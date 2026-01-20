import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getMeal().getPrice());

const veganDishBuilder = new VeganDishBuilder();

const meal = veganDishBuilder.makeMeal().getMeal();

console.log(meal);
console.log(meal.getPrice());
