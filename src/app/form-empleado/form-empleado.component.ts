import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  empleados:Empleado[]=[
    new Empleado('saul','santamaria','sistemas',2000),
    new Empleado('claudio','santamaria','contabilidad',2000),
    new Empleado('laura','santamaria','ventas',2100),
    new Empleado('carlos','santamaria','gerente',3000),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
