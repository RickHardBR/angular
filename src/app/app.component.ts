import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular' + VERSION.major;
  buttonLabelCar: string = 'Carrinho';
  buttonLabelPay: string = 'Pagar';
  buttonLabeLClean: string = 'Limpar';
  buttonLabeLOut: string = 'Fechar';
}
