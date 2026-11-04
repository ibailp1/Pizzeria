import { Component, inject } from '@angular/core';
import { Pizza } from '../models/PizzaModel';
import { ItemPedido } from '../models/ItemPedidoModel';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pedido } from '../servicios/pedido';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-pizzas',
  styleUrl: './pizzas.css',
  templateUrl: './pizzas.html',
})
export class Pizzas {

  pedidoService = inject(Pedido);

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

  ingredientes: string = "";
  pizzasFiltradas: Pizza[] = [...this.listaPizzas];

  filtrarPizzas() {
    const texto = this.ingredientes.toLowerCase().trim();

    if (texto == "") {
      this.pizzasFiltradas = [...this.listaPizzas];
    } else {
      this.pizzasFiltradas = this.listaPizzas.filter(pizza =>
        pizza.ingredients.some(ing =>
          ing.toLowerCase().includes(texto)
        )
      );
    }
  }

  agregarPizza(pizza: Pizza) {

    const itemPedido: ItemPedido = new ItemPedido(pizza);

    const itemExistente = this.pedidoService.pedido.find(item => item.pizza.name == pizza.name);

    if (itemExistente != null) {
      itemExistente.amount += pizza.amount;

    } else {

      this.pedidoService.pedido.push(itemPedido);
    }
  }

}