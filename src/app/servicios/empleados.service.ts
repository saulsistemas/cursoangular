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
}