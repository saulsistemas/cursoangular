import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  //INTERPOLACION
  titulo = "Registro de usuarios";
  message="No esta registrado";
  nombre:string="";
  apellido:string="";
  registro= false;
  registrarUsuario(){
    //this.nombre;
    //this.apellido;
    this.registro=true;
    this.message ="User registrado con exito!"
  }


  constructor() { }
  ngOnInit(): void {
  }

}
