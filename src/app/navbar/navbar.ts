import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  @Output() buscarIngredientes = new EventEmitter<string>();

  ingredientes: string = "";

  buscar() {
    this.buscarIngredientes.emit(this.ingredientes);
  }

}
