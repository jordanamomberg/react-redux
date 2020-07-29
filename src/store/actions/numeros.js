import { NUM_UM_ALTERADO, NUM_DOIS_ALTERADO } from './actionTypes';

// Action Creator
export function alterarPrimeiroNumero(novoNumero) {
    return { 
        type: NUM_UM_ALTERADO,
        payload:  novoNumero
    }
}

// Action Creator
export function alterarSegundoNumero(novoNumero) {
    return { 
        type: NUM_DOIS_ALTERADO,
        payload:  novoNumero
    }
}