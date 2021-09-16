import React from 'react';
import TutorialSection from './TutorialSection';

const MainContent = ({onToggle, toggle, active}) => {

const renderMainContent = () => {
    if (!active) {
    return (
        <div className='no_tutorial_selected'>
            Welcome to WeInvest Tutorials
            <p></p>
        </div>
    )} 
    else {
        return <TutorialSection onToggle={onToggle} toggle={toggle} active={active} />;
    }
};

return <div className="main-content">{renderMainContent()}</div>;

};



export default MainContent
