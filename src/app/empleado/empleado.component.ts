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

habilitacionCuadro=false;
usuRegistrado=false;

textoDeRegistro="No hay nadie registrado";
getRegistroUsuario(){
  this.usuRegistrado=true;
}
getEdad(){
  return this.edad;
}
llamaEmpresa(value:string){

}

setUsuarioRegistrado(event:Event){
  console.log(event);
  
  //this.textoDeRegistro="si esta registrado";
  if ((<HTMLInputElement>event.target).value=="si") {
    return this.textoDeRegistro="si esta registrado";
  } else {
    return this.textoDeRegistro="no esta registrado";
  }
}
cambiaEmpresa(event:Event){
  this.empresa=(<HTMLInputElement>event.target).value;
}
  constructor() { }

  ngOnInit(): void {
  }

}
