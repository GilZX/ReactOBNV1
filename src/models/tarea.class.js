import { NIVEL } from "./nivel.enum"

export class Tarea{

    titulo="";
    descripcion="";
    completada=false;
    nivel=NIVEL.NORMAL;

    constructor(titulo,descripcion,completada,nivel){
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.completada=completada;
        this.nivel=nivel;
    }



}