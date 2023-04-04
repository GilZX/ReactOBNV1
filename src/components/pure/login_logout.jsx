import React ,{useState}from "react";

const LoggedStyle={
    color: '#0CCA4A'
};

const LogoutStyle={
    color: '#FB3640'
}

const Login_Logout=(props)=>{
  const [logged,setLogged]=useState(false);

    return (
      <div style={logged ? LoggedStyle:LogoutStyle}>
            {logged ? (<p>Bienvenido : {props.name}</p>) : (<p>Inicia Sesion</p>)}
            

            <button className={logged?'btn btn-warning':'btn btn-info'} onClick={()=>{

                    setLogged(!logged);
                }
            }>
                {logged?'Logout':'Login'}
            </button>
      </div>
    )
  
} 

export default Login_Logout;