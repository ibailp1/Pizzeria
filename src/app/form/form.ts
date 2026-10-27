import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form {
  rangeValue = 24;

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
}
