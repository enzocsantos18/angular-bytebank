import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';


  transferencias: ITransferencia[] = [];

  transferir($event) {
    const trasferencia =  {
      ...$event,
      data: new Date()
    }

    this.transferencias.push(trasferencia);
  }
}

interface ITransferencia {
  valor: number,
  destino: number,
  data: Date
}
