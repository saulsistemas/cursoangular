import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../form-empleado/empleado.model';
import { EmpleadoService } from '../servicios/empleados.service';

@Component({
  selector: 'app-actualiza',
  templateUrl: './actualiza.component.html',
  styleUrls: ['./actualiza.component.css']
})
export class ActualizaComponent implements OnInit {

  empleados:Empleado[]=[];
  constructor(private router:Router,private route:ActivatedRoute,private empleadosService:EmpleadoService) { }

  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
    this.indice=this.route.snapshot.params['id'];
    let empleado:Empleado=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }
  volveHome(){
    this.router.navigate(['']);
  }
  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;
  indice:number;

  actualizaEmpleado(){
    let miEmpelado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    //this.miServicio.muestraMensaje("nombre del empleado " + miEmpelado.nombre)
    this.empleadosService.actualizarEmpleadoServicio(this.indice,miEmpelado);
    console.log(this.empleados);
    this.volveHome();
  }

}
