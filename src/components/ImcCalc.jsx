import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const ClearForm = (event) => {
    event.preventDefault();
    setHeight("");
    setWeight("");
  };

  return (
    <div id="calc-imc">
      <h2>Calculadora IMC</h2>
      <form action="" id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              id="height"
              placeholder="Exemplo: 1,75"
              onChange={(event) => setHeight(event.target.value)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              id="weight"
              placeholder="Exemplo: 70,5"
              onChange={(event) => setWeight(event.target.value)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular" />
          <Button id="clear-btn" text="Limpar" action={ClearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
