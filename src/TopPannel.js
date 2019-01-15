import React, { Component } from 'react';
import { ComboBox,Label  } from '@sap/orca-react-ui';
import { connect } from 'react-redux';
import {addColumn} from './redux/changeTable'; 
import {selectionChange} from './redux/selectionChange';
import { bindActionCreators } from 'redux';

let dimensionsList = [
    {
      selected: true,
      text: "Account",
      info: "Account"
    },
    {
      selected: false,
      text: "Entity",
      info: "Entity"
    },
    {
      selected: false,
      text: "Time",
      info: "Time"
    },
    {
      selected: false,
      text: "Audit",
      info: "Audit"
    },
    {
      selected: false,
      text: "Currency",
      info: "Currency"
    },
    {
      selected: false,
      text: "First Name",
      info: "firstName"
    }
];
  
class TopPannel extends React.Component{
    render(){
        return (
            <div className="headPannel">
                <div className="lableCSS"><Label text="Source" fontWeight={Label.FontWeight.Standard}></Label></div>
                <div className="ddlCss">
                    <ComboBox items={dimensionsList} onSelectionChange={(oEvent, indices, data) => {  selectionChange(data); }}>
                    </ComboBox>
                    <button className="btn-plus-one" onClick={ ()=>{
                        addColumn(this.props.newColumn.value);
                    }}>
                    +</button>
                </div>
            </div>
          );
    }
}

function mapStateToProps(state) {
    return {
        newColumn: state.newColumn
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({addColumn, selectionChange}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPannel);