import React, { Component } from 'react';
import { Table } from '@sap/orca-react-ui';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import Cell from './Cell';

class Grid extends React.Component {
  static propTypes = {
    tableData: PropTypes.object.isRequired
  };
  getPaginationProps = function(){
    return 10;
  }
  render(){
    // let columns = [
    //   {
    //     header: "Account",
    //     accessor: "Account"
    //   },
    //   {
    //     header: "Entity",
    //     accessor: "Entity"
    //   },
    //   {
    //     header: "Time",
    //     accessor: "Time"
    //   },
    //   {
    //     header: "Audit",
    //     accessor: "Audit"
    //   },{
    //     header: "Currency",
    //     accessor: "Currency"
    //   },{
    //     header: "FirstName",
    //     accessor: "firstName"
    //   }
    // ];
      let columns = this.props.tableData.columns;
      columns.map(item => {
        item.Cell = (cellInfo) => {
          return (<Cell cellInfo={cellInfo}/>);
        }
      });
      return (
      <Table height="100%" width="100%" 
        columns={columns} 
        data={this.props.tableData.data}
        selectionMode={Table.SelectionMode.None}
      />
    );
  }
      
};
function mapStateToProps(state) {
  return {
    tableData: state.tableData
  };
}

export default connect(mapStateToProps)(Grid);