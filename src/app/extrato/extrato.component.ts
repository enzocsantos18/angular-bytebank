import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  constructor(private transferenciaService: TransferenciaService) {}

  @Input() transferencias: Transferencia[];

  ngOnInit(): void {
    this.transferenciaService
      .todas()
      .subscribe((transferencias: Transferencia[]) => {
        this.transferencias = transferencias;
      });
    this.transferencias = this.transferenciaService.transferencias;
  }
}
