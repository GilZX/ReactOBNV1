import { useRef, useState,useEffect} from "react";


const Ejemplo02=()=>{

    const [contador01,setContador01]= useState(0); 

    const [contador02,setContador02]= useState(0); 

    const elemRef=useRef();

    function Incrementar(){

        setContador01(contador01+1)
    }
    function Incrementar02(){

        setContador02(contador02+1)
    }

    useEffect(() => {
        
      console.log("Cambio EN el campo");
      console.log(elemRef);

    },[contador01,contador02]); /* [componentes que estaran a la escucha se colocan dentro de [] ]*/
    

    return(
        <div>
            <h1 ref={elemRef}> Ejemplo De Elemento Referenciado</h1>
            <h2>{contador01}</h2>
            <h2>{contador02}</h2>
            <button onClick={Incrementar}>Incrementar01</button>
            <button onClick={Incrementar02}>Incrementar02</button>
        </div>
    )
}


export default Ejemplo02;