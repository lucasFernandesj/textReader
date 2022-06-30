import React from 'react';
import{Link } from 'react-router-dom'
import {connect} from 'react-redux';

class Output extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <>
            <Link to='/' >Upload file</Link>
            <h1>Output page</h1>
            {this.props.text}
            </>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
       text : state.text
    }
}


export default connect(mapStateToProps , null )(Output)