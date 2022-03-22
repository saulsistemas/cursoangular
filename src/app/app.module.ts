import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FormEmpleadoComponent } from './form-empleado/form-empleado.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadosComponent } from './caracteristicas-empleados/caracteristicas-empleados.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CalculadoraComponent,
    DirectivaComponent,
    FormEmpleadoComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadosComponent, //HAY QUE REGISTRAR NUESTRA CLASE COMPONENTE CREADA
  ],
  imports: [
    BrowserModule, 
    FormsModule //PARA QUE FUNCIONE BANANA BOX [()]
  ],
  providers: [
    ServicioEmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
