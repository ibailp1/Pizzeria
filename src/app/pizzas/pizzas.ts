import { Component, output, input, OnChanges } from '@angular/core';
import { Pizza } from '../models/PizzaModel';
import { Order } from '../models/OrderModel';
import { ItemPedido } from '../models/ItemPedidoModel';
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

  pedido: Order | null = null;
  pedidoActualizado = output<Order>();

  agregarPizza(pizza: Pizza) {
    const itemPedido: ItemPedido = new ItemPedido(pizza);

    let itemsActualizados;

    if (this.pedido == null) {
      itemsActualizados = [itemPedido];
    } else {
      const itemExistente = this.pedido.items.find(item => item.pizza.name === pizza.name);

      if (itemExistente != null) {
        itemExistente.amount += pizza.amount;
        itemsActualizados = [...this.pedido.items];
      } else {
        itemsActualizados = [...this.pedido.items, itemPedido]
      }
    }

    this.pedido = new Order(itemsActualizados);

    this.pedidoActualizado.emit(this.pedido);
  }

}
