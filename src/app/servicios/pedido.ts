import { Injectable } from '@angular/core';
import { ItemPedido } from '../models/ItemPedidoModel';
import { Pizzas } from '../pizzas/pizzas';

@Injectable({
    providedIn: 'root'
})

export class Pedido {
    pedido: ItemPedido[] = [];

    calcularTotal(): number {
        let total: number = 0;

        for (let item of this.pedido) {
            total += item.amount * item.pizza.price;
        }

        return total;
    }

    eliminarPizza(nombre: string) {
        for (let i = 0; i < this.pedido.length; i++) {
            if (this.pedido[i].pizza.name == nombre) {
                this.pedido.splice(i, 1);
                break;
            }
        }
    }
}
