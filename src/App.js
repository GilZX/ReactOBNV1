import logo from './logo.svg';
import './App.css';
import Saludos from './components/pure/saludos';
import SaludosFunction from './components/pure/saludosFunction';
import TaskListComponent from './components/containers/task_list';
import ContactosListComponent from './components/containers/contactos_list';

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
        <TaskListComponent></TaskListComponent>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <ContactosListComponent></ContactosListComponent>
      </header>
    </div>
  );
}

export default App;
