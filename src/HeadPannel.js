import React, { Component } from 'react';
import { ComboBox,Label  } from '@sap/orca-react-ui';
import { connect } from 'react-redux';
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
  
export function HeadPannel ({dimensions, dispatch}){
    let selectedValue = _getSelectedValue().text;
    function getNewItemsWithSelectionChange (selectedText){
        const items = dimensionsList;
        const newItems = items.map(item => {
          const newItem = { ...item };
          if (selectedText !== item) {
            newItem.selected = false;
          } else {
            newItem.selected = true;
            selectedValue = newItem.text;
          }
          return newItem;
        });
    };

    function _getSelectedValue (){
      return dimensionsList.find((item) => {return item.selected;});
    }

    return (
      <div className="headPannel">
          <div className="lableCSS"><Label text="Source" fontWeight={Label.FontWeight.Standard}></Label></div>
          <div className="ddlCss">
              <ComboBox items={dimensionsList} onSelectionChange={(oEvent, indices, data) => {
                  getNewItemsWithSelectionChange(data); }}>
              </ComboBox>
              <button className="btn-plus-one" onClick={() => dispatch({'selectedValue': selectedValue, type: "ADD_COLUMN"})}>
              +</button>
          </div>
      </div>
    );
}
  
export default connect()(HeadPannel);