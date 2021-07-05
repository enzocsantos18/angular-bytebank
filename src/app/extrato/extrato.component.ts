import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  constructor() { }

  @Input() transferencias: ITransferencia[];

  ngOnInit(): void {
  }


}
interface ITransferencia {
  valor: number,
  destino: number,
  data: Date
}
