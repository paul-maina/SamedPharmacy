import { useState } from "react";

import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Layout from "./Components/Layout"
import './App.css'

function App() {

  const [activePage, setActivePage] = useState("Dashboard");
 
  return (
    <div className=" flex ">
      <div className="grid grid-cols-[256px_1fr] h-screen">
        <Sidebar setActivePage={setActivePage} />

      <div className="grid grid-rows-[auto_1fr] w-screen h-full overflow-y-auto">
          <Header/>
         <Layout activePage={activePage} />
      
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