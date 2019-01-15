import {ADD_COLUMN, ADD_ROW, CHANGE_VALUE} from "./constants";
import initialState from './initialState';

export function addColumn(value){
    return {
        type: ADD_COLUMN,
        selectedValue: value
    };
}
export function addRow(){
  return {
      type: ADD_ROW
  };
}
export function changeValue(e, cellInfo){
  return {
      type: CHANGE_VALUE,
      inputValue: e.target.innerHTML,
      cellInfo: cellInfo
  };
}


export function reducer(state = initialState, action) {
    switch (action.type) {
      case ADD_COLUMN:
        const columnName = action.selectedValue;
        return {
          columns: [...state.columns, {
            Header: action.selectedValue,
            accessor: columnName
          }],
          data: state.data
        };
      case CHANGE_VALUE:
          const inputValue = action.inputValue;
          const cellInfo = action.cellInfo;
          let newState = Object.assign({}, state);
          newState.data[cellInfo.index][cellInfo.column.id] = inputValue;
          return newState;
      case ADD_ROW:
        return [...state.data, [[]] ]
      default:
        return state;
    }
  }