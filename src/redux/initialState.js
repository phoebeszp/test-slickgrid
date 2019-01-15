
import {makeData} from '../common/Util';
const initialState = {
    columns: [
        {
          header: "Account",
          accessor: "Account"
        },
        {
          header: "Entity",
          accessor: "Entity"
        },
        {
          header: "Time",
          accessor: "Time"
        },
        {
          header: "Audit",
          accessor: "Audit"
        },{
          header: "Currency",
          accessor: "Currency"
        },{
          header: "FirstName",
          accessor: "firstName"
        }
      ],
    data: makeData(1000)
};



export default initialState;