import React from 'react';
import TutorialSection from './TutorialSection';

const MainContent = ({onToggle, toggle, active}) => {

const renderMainContent = () => {
    if (!active) {
    return (
        <div className='no_tutorial_selected'>
            <h1>Welcome to WeInvest Tutorials</h1>       
            <p>Navigate through the tutorials and learn new topics! Javascript is a fast rising stack in the market of technologies now and is essential for bagging your first job. Learn everything you need to know about javascript</p>
        </div>
    )} 
    else {
        return <TutorialSection onToggle={onToggle} toggle={toggle} active={active} />;
    }
};

return <div className="main-content">
    {renderMainContent()}
                {/* navigate to next course  */}
                <div className="btn next-course">
                <a  href='/'>{`${active ? 'Complete the next course' : 'Start Learning '}`}<i className='bx bx-cycling'></i></a>
                </div>
    </div>;

};



export default MainContent
