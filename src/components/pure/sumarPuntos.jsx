import { useState } from "react";


export const ComponenteEstado=()=>{

    const estadoInicial={
        partida:'partidia inicio',
        acumulado: 0
    }

    const[acumulador,setAcumulador]=useState(estadoInicial);

    const aumentarAcumulado=()=>{
        setAcumulador({
            partida:'partida iniciada',
            acumulado: acumulador.acumulado + 1

        })
    

    }

    return (

        <div>
            <h1>Informacion de Acumulado de partida</h1>
            <p>Partida : {acumulador.partida}</p>
            <p>Puntaje: {acumulador.acumulado}</p>
            <button onClick={aumentarAcumulado}>Aumentar</button>
        </div>


    )






}