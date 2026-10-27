import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pizzas',
  styleUrl: './pizzas.css',
  templateUrl: './pizzas.html',
})
export class Pizzas {
  listaPizzas: Pizza[] = [];

  @Output() listado = new EventEmitter<Pizza[]>();

  constructor() {
    this.listaPizzas.push(
      new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg"),
      new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg"),
      new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg"),
      new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg"),
      new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg"),
      new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg"),
      new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg"),
      new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg"),
    );

    this.listado.emit(this.listaPizzas);
  }
}

export class Pizza {
  public name: string;
  public price: number;
  public ingredients: string[];
  public image: string;

  constructor(name: string, price: number, ingredients: string[], image: string) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.image = image;
  }
}