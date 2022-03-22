import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
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
import { EmpleadoService } from './servicios/empleados.service';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponent } from './actualiza/actualiza.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './servicios/data.service';
const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'proyectos',component:ProyectosComponent},
  {path:'quienes',component:QuienesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'actualiza/:id',component:ActualizaComponent},
  {path:'**',component:ErrorPersonalizadoComponent},//LOS **INDICAN SI NO EXISTE LA PAGINA
];
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    CalculadoraComponent,
    DirectivaComponent,
    FormEmpleadoComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadosComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    ActualizaComponent,
    ErrorPersonalizadoComponent, //HAY QUE REGISTRAR NUESTRA CLASE COMPONENTE CREADA
  ],
  imports: [
    BrowserModule, 
    FormsModule, //PARA QUE FUNCIONE BANANA BOX [()]
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadoService,
    DataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
