import React from 'react';
import {connect} from 'react-redux';
import{Link } from 'react-router-dom'

//Child components
import InputRead from './InputRead';

class ReadFile extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <Link to='/output' >Output</Link>
            <h1>Upload a file</h1>
            <InputRead />
            </>
        )
    }
}

export default ReadFile