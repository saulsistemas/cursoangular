import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {
  //INTERPOLACION
  titulo = "Registro de usuarios";
  message="";
  nombre:string="";
  apellido:string="";
  cargo:string="";
  registro= false;
  entradas:Array<any> =[];


  registrarUsuario(){
    //this.nombre;
    //this.apellido;
    this.registro=true;
    this.message ="User registrado con exito!"
  }


  constructor() { 
    this.entradas =[
      {title:"Python primeros cursos"},
      {title:"Java primeros cursos"},
      {title:"Angular primeros cursos"},
      {title:"PHP primeros cursos"},
      {title:"LARAVEL primeros cursos"},
    ];
    console.log(this.entradas[0].title);
    
  }
  ngOnInit(): void {
  }

}
