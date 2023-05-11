import { Component, Input } from '@angular/core';
import { ICurrency } from 'src/app/interface/currency';
import { ConversorService } from './services/conversor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'divisasExamen';
  monedas: ICurrency[] = [];
  monedaOrigen!: ICurrency;
  monedaCambio!: ICurrency;
  monto!: number;
  resultado: number =0;
  selectDivisa: 1 | 2 = 2;

  valorUsuario: number = 0;
  divisaMXN = { "name": "Peso Mexicano", "currency": "MXN", "unit": 1 };


  constructor(
    private conversorService: ConversorService
  ) {

    this.conversorService.getDivisas().then((divisas) => {
      this.monedas = divisas;
    });

  }

  ngOnInit(): void {
    this.conversorService.getDivisas().then((data) => {
      this.monedas = data;
      this.monedaOrigen = this.monedas[0];
      this.monedaCambio = this.divisaMXN;
    });
  }

  calcular() {
    console.log(this.valorUsuario);
    console.log(this.monedaOrigen);
    this.resultado = (this.valorUsuario * this.monedaOrigen.unit / this.monedaCambio.unit);
    console.log(this.resultado);
    console.log('Valor del usuario:', this.valorUsuario);
  }

  swap() {
    this.monedaOrigen = this.divisaMXN;
    this.monedaCambio = this.monedas[0];
    this.selectDivisa = this.selectDivisa === 1 ? 2 : 1;
  }

}

