import { useReducer } from "react";
import "./App.css";
import Contador from "./Contador";
import Contador2 from "./Contador2";
import contadorReducer from "./contadorReducer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
        <Contador2 />
      </header>
    </div>
  );
}

export default App;
