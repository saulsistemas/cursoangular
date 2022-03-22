import { Injectable } from "@angular/core";
import { Empleado } from "../form-empleado/empleado.model";

@Injectable({
    providedIn:'root'

})
export class EmpleadoService{
    empleados:Empleado[]=[
        new Empleado('saul','santamaria','sistemas',2000),
        new Empleado('claudio','santamaria','contabilidad',2000),
        new Empleado('laura','santamaria','ventas',2100),
        new Empleado('carlos','santamaria','gerente',3000),
    ];

    agregarEmpleadoServicio(empleado:Empleado){
        this.empleados.push(empleado);
    }
}