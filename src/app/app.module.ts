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

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CalculadoraComponent,
    DirectivaComponent,
    FormEmpleadoComponent,
    EmpleadoHijoComponent, //HAY QUE REGISTRAR NUESTRA CLASE COMPONENTE CREADA
  ],
  imports: [
    BrowserModule, 
    FormsModule //PARA QUE FUNCIONE BANANA BOX [()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
