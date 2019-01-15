import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import {changeValue} from './redux/changeTable';


class Cell extends React.Component {
    static propTypes = {
        cellInfo: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
    }
    componentWillMount(){

    }
    render(){
        let cellInfo = this.props.cellInfo;
        const {changeValue} = this.props.actions;
        return (<div
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e)=>{
                changeValue(e, cellInfo);
            }}
           
            dangerouslySetInnerHTML= {{
                __html: this.props.tableData.data[cellInfo.index][cellInfo.column.id]
            }}
        />)
    };
}

function mapStateToProps(state) {
    return {
        tableData: state.tableData
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({changeValue}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cell);