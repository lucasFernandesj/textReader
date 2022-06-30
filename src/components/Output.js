import React from 'react';
import{Link } from 'react-router-dom'

class Output extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <>
            <Link to='/' >Upload file</Link>
            <h1>Output page</h1>
            </>
        )
    }
}

export default Output