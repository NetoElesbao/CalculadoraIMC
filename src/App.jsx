import { data } from "./data/data";
import { useState } from "react";

import "./App.css";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

// debugger;
function App() {
  const calcImcFunction = (event, height, weight) => {
    event.preventDefault();

    // VALIDA SE HOUVE O ENVIO DOS RESPECTIVOS VALORES
    if (!height || !weight) return;

    const heightValue = +height.replace(",", ".");
    const weightValue = +weight.replace(",", ".");

    const imc = (weightValue / (heightValue * heightValue)).toFixed(1);

    setImc(imc);
    console.log(`O IMC é ${imc}`);
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImcParameter={calcImcFunction} />
      ) : (
        <ImcTable data={data} />
      )}
    </div>
  );
}

export default App;
