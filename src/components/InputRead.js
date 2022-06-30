import React from 'react';
import{Link } from 'react-router-dom'
import {connect} from 'react-redux';
import{uploadText} from '../redux/actions'

class InputRead extends React.Component{
    constructor(props){
        super(props);
        this.state={
            text:'',
            fileName:''
        }
    }
    handleFileChange=(event)=>{
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = () =>{
            this.props.sendText(reader.result)
            // this.props.uploadText(reader.result)
            this.setState({text:reader.result , fileName:file.name})
            
        }
        reader.onerror =()=>{
            console.log('File error' , reader.error)
        }
    }
   
    sendText=(e)=>{
        console.log("sendText function")
        
        console.log(e)

    }

    remove=()=>{
        this.setState({text:'' , fileName:''})
    }
    render(){
        return(
            

            
            <div className='inputContainerWrapp'>
                 <Link to='/output' className='link' >Output</Link>
            <div className='inputReadContainer'>
            <h1 className="header">Upload a file</h1>
            <label for="files" className='inputFileLabel'>Choose a file</label>
            <input type="file" id="files"  className='hidden' onChange={this.handleFileChange}/>

            <br/>
            <button onClick={this.remove}>Clean</button><br />
            
            
            </div>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendText:(e)=>dispatch(uploadText(e))
    };
  };
  
 

export default connect(null, mapDispatchToProps)(InputRead)