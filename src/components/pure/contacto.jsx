import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/Contacto';

const ContactComponent=({contact})=>{


    return(
        

            <div>   
                <h2>
                    Nombre: {contact.nombre}  
                </h2>
                <h3>
                    Apellido: {contact.apellido}
                </h3>
                <h4>
                    Email: {contact.email}
                </h4>
                <h5>
                    Disponibilidad: {contact.conectado ? 'En linea':'No Disponible'}
                </h5>
            </div>
        


    );



};


ContactComponent.propTypes={
    contact:PropTypes.instanceOf(Contact)
}

export default  ContactComponent;