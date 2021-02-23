import React, {useState} from 'react';
import AltaPaquete from './Components/AltaPaquete';
import Header from './Components/Header';

function App() {

  let paque = localStorage.getItem('paquetes')
  if(!paque) {
    paque = []
  }

  const [paquetes, guardarPaquete] = useState(paque)

  const crearPaquete = paquete => {
    guardarPaquete([
      ...paquetes,
      paquete
    ]);
  };
    return (
      <>
      <h1>EXPLORE</h1>
      <div>
        <Header/>
        <AltaPaquete 
          crearPaquete={crearPaquete}
        />
      </div>
      </>
    )
}

export default App;
