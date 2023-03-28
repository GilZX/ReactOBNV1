import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  TaskComponent  from  '../pure/task';
import { Tarea } from '../../models/tarea.class';
import { NIVEL } from '../../models/nivel.enum';
import { Contact } from '../../models/Contacto';
import ContactComponent from '../pure/contacto';

const ContactosListComponent =()=>{

    const defaultContact=new Contact('Contacto Ejemplo','Apellido Contacto','contacto01@gmail.com',false);

        return (
            <div>
                 <div>
                     Tareas:
                    
                 </div>

                 {/*Aplicar un for/map para renderizar una lista*/ }
                 <ContactComponent contact={defaultContact}></ContactComponent>
                
            </div>
        );
    
};


export default ContactosListComponent;
