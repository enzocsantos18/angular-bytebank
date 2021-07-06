import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(private transferenciaService: TransferenciaService) {

  }

  transferir() {
    const valoresTransferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.transferenciaService.adicionar(valoresTransferencia).subscribe((resultado) => {
      console.log(resultado)
    }, error => {
      console.error(error)
    })
  }
}
