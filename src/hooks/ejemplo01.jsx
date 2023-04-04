
import React,{useState} from "react"
const Ejemplo01=()=>{



const valorInicial=0;

const objetoTarea={
    titulo:'Tarea Titulo',
    Descripcion:'Descripcion',
    activa:false
}


const [contador,setContador]=useState(valorInicial);
const [objeto,setActualizarObj]=useState(objetoTarea);


function incrementarValor(){
    setContador(contador+1)
}

function actualizarObj(){
    setActualizarObj({
        titulo:'Tarea Titulo',
        Descripcion:'Descripcion Actualzidos',
        activa:true
    })
}
function reiniciarValor(){
    setContador(0)
}
function decrementarValor(){
    setContador(contador-1)
}
return(

    <div>
            <h2>Valor De Incremento : {contador} </h2>
            <h3>Datos De el Objeto: </h3>
            <h4>Titulo:{objeto.titulo}</h4>
            <h4>Descripcion:{objeto.Descripcion}</h4>
            <h4>Estado Actual:{objeto.activa ? 'Activo':'Fuera De Servicio'}</h4>
            <button onClick={actualizarObj}>Actualizar Objeto</button>
            <button onClick={incrementarValor}>Incrementar</button>
            <button onClick={reiniciarValor}>Reiniciar</button>
            <button onClick={decrementarValor}>Decrementar</button>
    </div>
)

}


export default Ejemplo01;









