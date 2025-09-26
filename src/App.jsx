import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App () {

  const [count, setCount] = useState(0); // guardamos el valor actual del contador

  // estas funciones son para cambiar el contador, las pasamos al padre para tener acceso desde todos los hijos
  const increment = () => setCount ((prevCount) => prevCount +1);
  const decrement = () => setCount ((prevCount) => prevCount -1);
    
  
 
  return (
    <div className="App">
      <h2><em>Counter</em></h2>


         {/*estamos pasando el count y las funciones como props*/}
      <Counter count={count} increment={increment} decrement={decrement}/> 

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo count={count}/> {/*pasamos las props a cada exponent(hijo)*/}
        <ExponentThree count={count}/>
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count}/>
      </div>
    </div>
  );
}

export default App;
