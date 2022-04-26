import "./App.css";
import Contador from "./Contador";
import Contador2 from "./Contador2";
import Contexto from "./Contexto";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contexto>
          <Contador />
          <Contador2 />
        </Contexto>
      </header>
    </div>
  );
}

export default App;
