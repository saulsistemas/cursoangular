import { Component, OnInit } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../servicios/empleados.service';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {
  empleados:Empleado[]=[];
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadoService) { 
    //console.log(miServicio.muestraMensaje);
    //PARA CARGAR DENTRO DEL ARRAY LO QUE TIENE MI SERVICIO
    //VARIABLE EMPLEADOS ARRAY = VARIABLE EMPLEADOS QUE CONTIENE DATOS EN SERVICIO
    //this.empleados=this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }

  
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpelado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.miServicio.muestraMensaje("nombre del empleado " + miEmpelado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpelado);
    console.log(this.empleados);
    
  }
  

  
}
