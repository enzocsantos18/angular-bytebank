import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  constructor(private transferenciaService : TransferenciaService) { }

  @Input() transferencias: ITransferencia[];

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.transferencias;
  }


}
interface ITransferencia {
  valor: number,
  destino: number,
  data: Date
}
