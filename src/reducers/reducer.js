import * as actionTypes from '../actions/actions';

function elReducer(state, action) {
    console.log('Recibi la action ' + action.type);
    let newState = state;
    switch (action.type) {
        case actionTypes.ACT_INCREMENTAR:
            newState = { contador: state.contador + action.value }
            break;
        case actionTypes.ACT_DECREMENTAR:
            newState = { contador: state.contador - action.value }
            break;
        default:
            break;
    }
    return newState;
}

export default elReducer;