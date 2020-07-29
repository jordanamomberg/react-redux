import React from 'react';
import Card from './Card';
import { connect } from 'react-redux';


    function Soma(props) {
        const {num1,num2} = props
        console.log(props)

    return (
        <Card title="Soma" blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{num1+num2}</strong>
                </span>
            </div>
        </Card>
    );
};


    function MapStateToProps(state) { 
        return {
            num1: state.numeros.num1,
            num2: state.numeros.num2,
        }
    }


export default connect(MapStateToProps)(Soma);