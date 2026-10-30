import { Component, Input, OnChanges } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-pizzas',
  styleUrl: './pizzas.css',
  templateUrl: './pizzas.html',
})
export class Pizzas implements OnChanges {

  listaPizzas: Pizza[] = [
    new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg"),
    new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg"),
    new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg"),
    new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg"),
    new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg"),
    new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg"),
    new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg"),
    new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg")
  ];

  @Input() ingredientes: string = "";

  pizzasFiltradas: Pizza[] = [...this.listaPizzas];

  ngOnChanges() {
    const texto = this.ingredientes.toLowerCase().trim();

    if (texto === "") {
      this.pizzasFiltradas = [...this.listaPizzas];
    } else {
      this.pizzasFiltradas = this.listaPizzas.filter(pizza =>
        pizza.ingredients.some(ing =>
          ing.toLowerCase().includes(texto)
        )
      );
    }
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