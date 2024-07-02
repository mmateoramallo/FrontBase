import {Inicio} from "./components/Inicio";
import './App.css';
import {Computadoras} from "./components/Computadoras";

/* 
pantalla inicial de nuestro proyecto
*/

function App() {
  return (
      <>
          {/* <Inicio/> */} {/* Se importa el inicio */}
          <div className="divBody">
                <Computadoras/> {/* Se importa la tabla de computadoras */}
          </div>
      </>
  );
  }
  export default App;
  