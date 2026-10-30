import { Component, signal } from '@angular/core';
import { Pizzas } from './pizzas/pizzas';
import { Navbar } from './navbar/navbar';
import { Form } from './form/form';
import { Footer } from './footer/footer';

@Component({
  imports: [Navbar, Pizzas, Form, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pizzeria');
  ingredientesBuscados: string = "";
}
