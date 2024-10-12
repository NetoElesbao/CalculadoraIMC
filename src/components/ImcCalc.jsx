import { useState } from "react";
import Button from "./Button";
import "./ImcCalc.css";

const ImcCalc = ({ calcImcParameter }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // LIMPA O FORMULÁRIO
  const ClearForm = (event) => {
    event.preventDefault();
    setHeight("");
    setWeight("");
  };

  // VALIDA OS DIGITOS DO USUÁRIO
  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  // VALIDA ALTURA
  const handleHeightChange = (event) => {
    const updateValue = validDigits(event.target.value);

    setHeight(updateValue);
  };

  // VALIDA PESO
  const handleWeightChange = (event) => {
    const updateValue = validDigits(event.target.value);

    setWeight(updateValue);
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
              onChange={(event) => handleHeightChange(event)}
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
              onChange={(event) => handleWeightChange(event)}
              value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button
            id="calc-btn"
            text="Calcular"
            action={(event) => calcImcParameter(event, height, weight)}
          />
          <Button id="clear-btn" text="Limpar" action={ClearForm} />
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
