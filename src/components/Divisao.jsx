import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';

function Divisao(props) {
    const {num1,num2} = props
    
    return (
        <Card title="Divisão" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{num1 / num2}</strong>
                </span>
            </div>
        </Card>
    )
}

function MapStateToProps(state) {
    return {
        num1: state.numeros.num1,
        num2: state.numeros.num2,
    }
}

export default connect(MapStateToProps)(Divisao)