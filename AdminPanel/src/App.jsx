

import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from "./Components/Dashboard/Grid"
import './App.css'

function App() {

  return (
    <div className="grid_container">
      <div className="grid grid-cols-[256px_1fr] h-screen">
      <Sidebar/>

        <div className="grid grid-rows-[auto_1fr] h-full ">
          <Header/>
          
      
        </div>
        
      </div>
      
    </div>
  );
};

export default App; 

{/*
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css'

function App () {
  return(
    <div className="">
      <Header/>
      <Sidebar/>
    </div>
  );
};

export default App;

*/}