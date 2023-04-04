
import React,{useEffect,useState} from "react"



const Clock=(props)=>{

    const [fecha,setFecha]=useState(new Date())
    const [edad,setEdad]=useState(0)
    const [nombre,setNombre]=useState('')
    const [email,setEmail]=useState('')



    useEffect(() => {
        const timer=setInterval(()=>tick(),1000);
        return () => {
            clearInterval(timer);
        };
    }, []);


    const tick=()=>{
        setFecha(new Date())
        setInterval(()=>setEdad((prevEdad)=>prevEdad+1),10000)//Cada 10 segundos se incrementa la Edad

    }

    return (

            <div>

                    <h2>Hora Actual: {fecha.toLocaleTimeString()}</h2>
                    <h3>{props.nombre}:{props.email}</h3>
                    <p>{edad}</p>
            </div>


    )


}
export default Clock;





























