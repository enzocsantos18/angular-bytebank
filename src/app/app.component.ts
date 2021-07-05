import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';


  transferencia: ITransferencia;

  transferir($event) {
    this.transferencia = $event;
  }
}

interface ITransferencia {
  valor: number,
  destino: number
}
