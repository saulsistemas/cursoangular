import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Empleado } from '../form-empleado/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {

  }
  guardarEmpleados(empleados:Empleado[]){
    this.httpClient.post('https://mis-clientes-6995b-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
      response=>console.log('Se han guardado los empleados'+ response),
      error=>console.log('error '+error),
    );
  }
}
