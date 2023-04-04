
import React, { useContext, useState } from 'react'

const ContextoPrincipal = React.createContext(null)

const Componente01 = () => {
    //Inicialisando estado en vacio que se va rellenarse con los datos del contexto del padre
    const state = useContext(ContextoPrincipal);
    return (
        <div>
            <h1>El Token es : {state.token} </h1>
            <h3>Estado de la Sesion Componente 01 : {state.session}</h3>
            {/*Pintado el componente 2*/}
            <Componente02></Componente02>
        </div>
    );

}




const Componente02 = () => {

    const state = useContext(ContextoPrincipal);

    return (
        <div>
            <h2>La Sesion es : {state.session}</h2>
        </div>
    );

}


export default function ComponenteConContexto() {
    //Creando Estado Inicial Del Padre Compartido por todos los componentes
    const estadoInicial = {
        token: 'JWTDEFAULT',
        session: 0
    }

    //Creamos el estado de este componente
    const[sessionData,setSessionData]=useState(estadoInicial)

    function actualizarSession(){
        setSessionData(

            {
                token:'JWT123456789',
                session:sessionData.session+1

            }
        );

    }

    return (
     <ContextoPrincipal.Provider value={sessionData}>
        <h1>Utilizando un Contexto Padre Provider</h1>
        <Componente01></Componente01>
        <button onClick={actualizarSession}>Actualizar Estado</button>
     </ContextoPrincipal.Provider>
    )

}















