import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  TaskComponent  from  '../pure/task';
import { Tarea } from '../../models/tarea.class';
import { NIVEL } from '../../models/nivel.enum';

const TaskListComponent =()=>{

    const defaulTask=new Tarea('Titulo Ejemplo','Descripcion Ejemplo',false,NIVEL.NORMAL);

        return (
            <div>
                 <div>
                     Tareas:
                    
                 </div>

                 {/*Aplicar un for/map para renderizar una lista*/ }
                 <TaskComponent task={defaulTask}></TaskComponent>
                
            </div>
        );
    
};


export default TaskListComponent;
