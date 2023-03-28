
import {React,useState} from 'react';
import {PropTypes} from 'prop-types'


const SaludosFunction = (props) => {

    const [rank,setRanking]=useState(10);
    const downRanking=()=>{
       
        if(rank>0){
            setRanking(rank-1)
        }
    }

    return (
        <div>
            Testeando Componente Tipo {props.tipo}
            <div>
                <button onClick={downRanking}>Bajar Ranking</button>
            </div>
            <p>Down Ranking {rank}</p>
        </div>
    );
}



SaludosFunction.propTypes={
    tipo:PropTypes.string
}

export default SaludosFunction;
