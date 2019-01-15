import {SELECTION_CHANGE} from  "./constants";

export function selectionChange(value){
    return {
        type: SELECTION_CHANGE,
        value: value
    }
}

export function reducer(state = {value:""}, action){
    switch(action.type){
        case SELECTION_CHANGE:
            return {...state, selection:action.value};
        default:
        return state;
    }
}