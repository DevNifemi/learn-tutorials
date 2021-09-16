import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";
import { useState } from 'react';
import MobileNavBar from "./components/MobileNavBar";
import store from './redux/store';
import  _ from 'lodash'



const App = () => {
  const { tutorialTitleReducer, activeId } = store.getState()
  const [toggle, setToggle] = useState(true)
  const [toggleMobileSideBar, setMobileToggle] = useState(false)

  return (
    <div className={`${toggle ? '' : 'active'}`}>
    
    <MobileNavBar 
     onToggleMobile={() => setMobileToggle(!toggleMobileSideBar)}/>

    <div className={`${toggle ? 'App' : 'active'}`}>
      <SideBar 
      titles={_.values(tutorialTitleReducer)}
      changeMainVideo={() => setToggle(!toggle)}
      toggleMobile={toggleMobileSideBar} />

      <MainContent
      active={activeId}
      onToggle={()=> setToggle(!toggle)} />

    </div>

    </div>
  );
}

export default App;
