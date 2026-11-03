import { Component, input } from '@angular/core';
import { Order } from '../models/OrderModel';

@Component({
  imports: [],
  selector: 'app-pedido',
  styleUrl: './pedido.css',
  templateUrl: './pedido.html',
})
export class Pedido {

  pedido = input<Order | null>(null);

}
