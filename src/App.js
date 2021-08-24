import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { useState } from 'react';
import MobileNavBar from "./components/MobileNavBar";



function App() {
  const [toggle, setToggle] = useState(true)
  const [toggleMobileSideBar, setMobileToggle] = useState(false)

  return (
    <div className={`${toggle ? '' : 'active'}`}>
    
    <MobileNavBar 
     onToggleMobile={() => setMobileToggle(!toggleMobileSideBar)}/>

    <div className={`${toggle ? 'App' : 'active'}`}>
      <SideBar 
      toggleMobile={toggleMobileSideBar} />

      <MainContent
      onToggle={()=> setToggle(!toggle)} />

    </div>

    </div>
  );
}

export default App;
