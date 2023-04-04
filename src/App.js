import logo from './logo.svg';
import './App.css';
import Saludos from './components/pure/saludos';
import SaludosFunction from './components/pure/saludosFunction';
import TaskListComponent from './components/containers/task_list';
import ContactosListComponent from './components/containers/contactos_list';
import Ejemplo01 from './hooks/ejemplo01';
import Ejemplo02 from './hooks/ejemplo02';
import Ejemplo04 from './hooks/ejemplo04';
import ComponenteConContexto from './hooks/ejemplo03';
import { ComponenteEstado } from './components/pure/sumarPuntos';
import Login_Logout from './components/pure/login_logout';
import Clock from './components/pure/actividad01';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Añadiendo Parrafo Personalizado</p>
        {/*<Saludos code={"java"}></Saludos>*/}
        {/*<SaludosFunction tipo={"funcion"}></SaludosFunction>*/}
       { /*<TaskListComponent></TaskListComponent>*/}
       {/*' <Ejemplo01></Ejemplo01>'*/}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

       {/*<ContactosListComponent></ContactosListComponent>'*/}
       {/*'<Ejemplo02></Ejemplo02>'*/}
        {/*'<p>Ejemplo de useContext y useState</p>'*/}
        {/*'<ComponenteConContexto> </ComponenteConContexto>'*/}
        {/*'<Ejemplo04>'*/}

          {/*'<p>Parrafo Que se comporta como props.children</p>'*/}

        {/*'</Ejemplo04>'*/}

        {/*'<ComponenteEstado></ComponenteEstado>'*/}
        <Login_Logout name={'Usuario 01'}></Login_Logout>
        <TaskListComponent></TaskListComponent>
        <Clock nombre={'react'} email={'react@gmail.com'}></Clock>
      </header>
    </div>
  );
}

export default App;
