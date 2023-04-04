import React, { Component ,useEffect} from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../models/tarea.class';
//Importando hoja de estilo de task 
import '../../styles/task.scss'
const TaskComponent = ({task})=>{


    //Implementado UseEffect para controlar el estado de una tarea 

    useEffect(() => {
        console.log("Tarea Creada");
        return () => {
            let mensaje="Tarea" + task.name +"Es ta apunto de desmontarse";
            console.log(mensaje);
        };
    }, [task]);



    return (

        <div>   
            <h2 className='task-name'> 
                Titulo: {task.titulo}  
            </h2>
            <h3>
                Descripcion: {task.descripcion}
            </h3>
            <h4>
                Nivel: {task.nivel}
            </h4>
            <h5>
                Tarea Completada: {task.completada ? 'COMPLETADA':'PENDIENTE'}
            </h5>
        </div>
    );

}
    
  


TaskComponent.propTypes = {
    task:PropTypes.instanceOf(Tarea)
};


export default TaskComponent;




