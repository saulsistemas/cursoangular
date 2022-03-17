import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
//INTEPOLACION = TEXTO DINAMICO

nombre = "JUAN";
apellido = "PEREZ";
private edad = 8;
empresa="CANVIA";

getEdad(){
  return this.edad;
}
  constructor() { }

  ngOnInit(): void {
  }

}
