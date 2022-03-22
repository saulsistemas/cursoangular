import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleados',
  templateUrl: './caracteristicas-empleados.component.html',
  styleUrls: ['./caracteristicas-empleados.component.css']
})
export class CaracteristicasEmpleadosComponent implements OnInit {

  @Output() caracteristicasEmpleados =new EventEmitter<string>();

  agregasrCaracteristicas(value:string){
    this.caracteristicasEmpleados.emit(value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
