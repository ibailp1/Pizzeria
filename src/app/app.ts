import { Component, signal } from '@angular/core';
import { Pizzas } from './pizzas/pizzas';
import { Navbar } from './navbar/navbar';
import { Pedido } from './pedido/pedido';
import { Form } from './form/form';
import { Footer } from './footer/footer';
import { Order } from './models/OrderModel';

@Component({
  imports: [Navbar, Pizzas, Pedido, Form, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pizzeria');
  ingredientesBuscados: string = "";
  recibirPedido: Order | null = null;
}
