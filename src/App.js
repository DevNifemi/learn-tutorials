import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { useState } from 'react';
import MobileNavBar from "./components/MobileNavBar";



function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className={`${toggle ? '' : 'active'}`}>
    
    <MobileNavBar/>

    <div className={`${toggle ? 'App' : 'active'}`}>
      <SideBar />
      <MainContent
      toggle={toggle}
      onToggle={()=> setToggle(!toggle)} />
    </div>

    </div>
  );
}

export default App;
