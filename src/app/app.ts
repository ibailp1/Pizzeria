import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Pizzas } from './pizzas/pizzas';
import { Navbar } from './navbar/navbar';
import { Form } from './form/form';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, Navbar, Pizzas, Form, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Pizzeria');
}
