import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  erro: string = '';

  constructor(private transferenciaService: TransferenciaService, private router : Router) {

  }

  transferir() {
    const valoresTransferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.transferenciaService.adicionar(valoresTransferencia).subscribe((resultado) => {
      this.router.navigateByUrl('extrato')
    }, error => {
      this.erro = 'Erro ao tranferir';
    })
  }
}
