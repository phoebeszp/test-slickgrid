import React, { Component } from 'react';
import HeadPannel from './HeadPannel';
import TopPannel from './TopPannel';
import Grid from './Grid';
export default class LazyGrid extends Component{
    render(){
        return(<div>
            <HeadPannel></HeadPannel>
            <Grid ></Grid>
        </div>)
    }
}