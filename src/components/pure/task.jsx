import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tarea } from '../../models/tarea.class';

const TaskComponent = ({task})=>{
    return (

        <div>   
            <h2>
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




