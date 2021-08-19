import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { useState } from 'react';



function App() {
  const [toggle, setToggle] = useState(true)

  return (
    <div className={`${toggle ? 'App' : 'active'}`}>
      
      <SideBar />
      <MainContent
      toggle={toggle}
      onToggle={()=> setToggle(!toggle)} />
    </div>
  );
}

export default App;
