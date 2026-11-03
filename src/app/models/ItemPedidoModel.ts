import { Pizza } from "./PizzaModel";

export class ItemPedido {
  public pizza: Pizza;
  public amount: number;

  constructor(pizza: Pizza) {
    this.pizza = pizza;
    this.amount = pizza.amount;
  }
}