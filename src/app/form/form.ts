
import { Component, inject, signal } from '@angular/core';
import { Pedido } from '../servicios/pedido';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {

  constructor(private router: Router) { }

  pedidoService: Pedido = inject(Pedido);

  rangeValue: number = 24;

  actualizarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.rangeValue = Number(input.value);
  }

  bizumOculto = signal(false);
  tarjetaOculto = signal(true);

  toggleBizum() {
    this.bizumOculto.set(false);
    this.tarjetaOculto.set(true);
  }

  toggleTarjeta() {
    this.tarjetaOculto.set(false);
    this.bizumOculto.set(true);
  }

  finalizarPedido() {
    this.pedidoService.pedido = [];
    this.router.navigate(['/inicio']);
  }
}
