import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  
  constructor(private miServicio:ServicioEmpleadosService) { 
    //console.log(miServicio.muestraMensaje);
    
  }

  empleados:Empleado[]=[
    new Empleado('saul','santamaria','sistemas',2000),
    new Empleado('claudio','santamaria','contabilidad',2000),
    new Empleado('laura','santamaria','ventas',2100),
    new Empleado('carlos','santamaria','gerente',3000),
  ];
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpelado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("nombre del empleado " + miEmpelado.nombre)
    this.empleados.push(miEmpelado);
    console.log(this.empleados);
    
  }
  

  ngOnInit(): void {
  }

}
