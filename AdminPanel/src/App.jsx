
import Header from './Components/Header'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Components/Home'
import './App.css'

function App() {

  return (
    <div className="grid_container">
      <div className="grid grid-cols-[220px_1fr] h-screen">
        <Sidebar/>

        <div className="grid grid-rows-[auto_1fr] h-full ">
          <Header/>
          <Home/>
        </div>
        
      </div>
      
    </div>
  );
};

export default App;
