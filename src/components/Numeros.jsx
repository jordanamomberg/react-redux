import React from "react";
import "./Numeros.css";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarPrimeiroNumero, alterarSegundoNumero } from "../store/actions/numeros";

function Numeros(props) {
  const { num1, num2 } = props;

  return (
    <Card title="Números" red>
      <div className="numeros">
        <span>
          <strong>Número 1:</strong>
          <input 
            type="number" 
            value={num1} 
            onChange={e => props.alterarNumero1(+e.target.value)}
          />
        </span>
        <span>
          <strong>Número 2:</strong>
          <input 
            type="number" 
            value={num2} 
            onChange={e => props.alterarNumero2(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    num1: state.numeros.num1,
    num2: state.numeros.num2,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarNumero1(novoNumero) {
      // action creator => action
      const action = alterarPrimeiroNumero(novoNumero)
      dispatch(action)
    },
    alterarNumero2(novoNumero) {
      // action creator => action
      const action = alterarSegundoNumero(novoNumero)
      dispatch(action)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Numeros);
