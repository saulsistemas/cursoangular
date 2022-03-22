import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../form-empleado/empleado.model';
import { EmpleadoService } from '../servicios/empleados.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  empleados:Empleado[]=[];
  constructor(private router:Router,private empleadosService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }
  volveHome(){
    this.router.navigate(['']);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

  agregarEmpleado(){
    let miEmpelado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("nombre del empleado " + miEmpelado.nombre)
    this.empleadosService.agregarEmpleadoServicio(miEmpelado);
    console.log(this.empleados);
    this.volveHome();
  }
}
