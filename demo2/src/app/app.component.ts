import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  texto1 = 'Hola';
  numero1 = 0;
  numero2 = 0;
  select = 'opcion4';
  titulo = "";

  sumar() {
    return this.numero1 + this.numero2
  }

  restar() {
    return this.numero1 - this.numero2
  }

  multiplicar() {
    return this.numero1 * this.numero2
  }

  dividir() {
    return this.numero1 / this.numero2
  }
}
