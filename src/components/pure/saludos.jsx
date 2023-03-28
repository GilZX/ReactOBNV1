import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludos extends Component {

    constructor(props){
        super(props);
        this.state={
            ranking:3
        }   

    }

   


    render() {
        return (
            <div>
                <h3>Analizando Componentes Atraves de Funcion</h3>
                <h4>Lenguaje de programacion: {this.props.code} / ranking: {this.state.ranking} </h4>

                <div>
                        <button onClick={this.topRanking}>  Up Ranking  </button>
                </div>
            </div>
        );
    }


    topRanking = () =>{
        this.setState((prevState) => (
            {
                ranking : prevState.ranking + 1
            }
        ) )
           
    }
}


Saludos.propTypes = {
    code:PropTypes.string,

};


export default Saludos;
