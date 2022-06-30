import React from 'react';
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
            <>
            <input type="file" onChange={this.handleFileChange}/>

            <br/>
            <button onClick={this.remove}>Clean</button><br />
            {/* <button  onClick={this.props.sendText}>Submit</button> */}
            <br />
            {this.state.text}
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendText:(e)=>dispatch(uploadText(e))
    };
  };
  
  const mapStateToProps = (state) => {
    return {
     
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(InputRead)