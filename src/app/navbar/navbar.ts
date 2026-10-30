import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

  buscarIngredientes = output<string>();
  ingredientes: string = "";

  buscar() {
    this.buscarIngredientes.emit(this.ingredientes);
  }

}
