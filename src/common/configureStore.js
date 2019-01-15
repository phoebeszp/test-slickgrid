import { createStore, combineReducers } from 'redux';
import {reducer as changeTable} from '../redux/changeTable';
import {reducer as selectionChange} from '../redux/selectionChange';


let reducers = combineReducers({tableData: changeTable, newColumn: selectionChange});
const store = createStore(reducers);
export default store;