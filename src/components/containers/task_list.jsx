import React, { Component,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import  TaskComponent  from  '../pure/task';
import { Tarea } from '../../models/tarea.class';
import { NIVEL } from '../../models/nivel.enum';

const TaskListComponent =()=>{

    const defaulTask=new Tarea('Titulo Ejemplo','Descripcion Ejemplo',false,NIVEL.NORMAL);

    //Estado Del Componente 

    const [task, setTask] = useState(defaulTask);
    const [cargado,setCargado]=useState(true);

    //Control del ciclo de vida del componente 

        useEffect(() => {
            console.log("El Estado de la lista de tareas ha sido modificado");
            setCargado(false);
            return () => {
                console.log("El estado del componente justo antes de desmontarse");
            };
        }, [task]);

        return (
            <div>
                 <div>
                 <h1> Tareas:</h1>
                    
                    
                 </div>

                 {/*Aplicar un for/map para renderizar una lista*/ }
                 <TaskComponent task={defaulTask}></TaskComponent>
                
            </div>
        );
    
};


export default TaskListComponent;
