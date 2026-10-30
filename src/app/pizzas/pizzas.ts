import { Component, input, OnChanges } from '@angular/core';
import { Pizza } from '../models/PizzaModel'
import { FormsModule } from '@angular/forms';


@Component({
  imports: [FormsModule],
  selector: 'app-pizzas',
  styleUrl: './pizzas.css',
  templateUrl: './pizzas.html',
})
export class Pizzas implements OnChanges {

  listaPizzas: Pizza[] = [
    new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg", 1),
    new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg", 1),
    new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg", 1),
    new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg", 1),
    new Pizza("Barbacoa", 11, ["Salsa barbacoa", "Carne picada", "Bacon", "Cebolla"], "barbacoa.jpg", 1),
    new Pizza("Hawaiana", 10, ["Tomate", "Mozzarella", "Jamón cocido", "Piña"], "hawaiana.jpg", 1),
    new Pizza("Cuatro Quesos", 12, ["Mozzarella", "Gorgonzola", "Parmesano", "Queso emmetal"], "cuatroquesos.jpg", 1),
    new Pizza("Margarita", 11, ["Tomate", "Mozzarella", "Albahaca"], "margarita.jpg", 1)
  ];

  ingredientes = input<string>("");

  pizzasFiltradas: Pizza[] = [...this.listaPizzas];

  ngOnChanges() {
    this.filtrarPizzas();
  }

  filtrarPizzas() {
    const texto = this.ingredientes().toLowerCase().trim();

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

  agregarPizza(cantidad: number) {
    alert("Has agregado " + cantidad + " pizzas");
  }
}
