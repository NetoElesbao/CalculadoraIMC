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

    const imcResult = (weightValue / (heightValue * heightValue)).toFixed(1);

    setImc(imcResult);
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
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
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} />
      )}
    </div>
  );
}

export default App;
