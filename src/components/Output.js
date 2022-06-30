import React from 'react';
import{Link } from 'react-router-dom'
import {connect} from 'react-redux';
import { createPortal } from 'react-dom';

class Output extends React.Component{
    constructor(props){
        super(props);

    }
    
   

    render(){
       
        
        return(
            <>
            <div className='inputContainerWrapp'>
            <Link to='/' className='link'>Upload file</Link>
            <div className='inputReadContainer'>
            <h1 className='header'>Output page</h1>
            <div className='result'>
            <p>
            {this.props.text}

            </p>

            </div>
            </div>
            </div>
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