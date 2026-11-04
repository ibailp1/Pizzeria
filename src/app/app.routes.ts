import { Routes } from '@angular/router';
import { Pizzas } from './pizzas/pizzas';
import { Form } from './form/form';

export const routes: Routes = [
    { path: '', component: Pizzas },
    { path: 'inicio', component: Pizzas },
    { path: 'encargo', component: Form },
];
