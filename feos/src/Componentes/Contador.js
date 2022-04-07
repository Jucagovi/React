import React, {useState} from "react";

function Contador() {
    
    const [contador, setContador] = useState(0);

    const contar = () => {
        setContador(contador +1);
    };

    return ( 
    <React.Fragment>
        <h3>Has pulsado el botón {contador} veces</h3>
        <button onClick={() => contar()}>Púlsame</button>
    </React.Fragment>
    );
}

export default Contador;