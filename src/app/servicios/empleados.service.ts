import { Injectable } from "@angular/core";
import { Empleado } from "../form-empleado/empleado.model";
import { ServicioEmpleadosService } from "../servicio-empleados.service";

@Injectable({
    providedIn:'root'

})
export class EmpleadoService{
    constructor(private servicioVentana:ServicioEmpleadosService){

    }
    empleados:Empleado[]=[
        new Empleado('saul','santamaria','sistemas',2000),
        new Empleado('claudio','santamaria','contabilidad',2000),
        new Empleado('laura','santamaria','ventas',2100),
        new Empleado('carlos','santamaria','gerente',3000),
    ];

    agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentana.muestraMensaje("Persona que se va agregar: "+"\n"+empleado.nombre);
        this.empleados.push(empleado);
    }
    encontrarEmpleado(indice:number){
        let empleado:Empleado = this.empleados[indice];
        return empleado;
    }
    actualizarEmpleadoServicio(indice:number,empleado:Empleado){
        let empleadoModificado= this.empleados[indice];
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;
    }
    eliminarEmpleadoServicio(indice:number){
        this.empleados.splice(indice,1);
    }
}