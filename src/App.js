
import './App.css';
import React from 'react';
//Components
import ReadFile from './components/ReadFile';
import Output from './components/Output';

import {BrowserRouter,Routes,Route} from  'react-router-dom'


class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      // <div>
      //    <ReadFile/>
      // <Output/>
      // </div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<ReadFile/>} />
      <Route path='/output' element={<Output/>} />

      </Routes>
    
    </BrowserRouter>
    
  );
  }
  
   
}

export default App;
