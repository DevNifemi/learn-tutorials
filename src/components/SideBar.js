import SideBarAccordions from "./SideBarAccordions.js"

const SideBar = ({toggleMobile}) => {
    return (
        <div className={`sidebar ${toggleMobile ? 'active-sidebar' : ''}`}>

        {/* video progress bar  */}
            <div className="sidebar-intro">
                <div className="logo">
                    <img src="https://import.cdn.thinkific.com/366276/course_player_logo/1620207581889FI_FemaleInvestlogo_240x48px1.png" alt="" />
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore ut, modi, tempora quisquam quasi temporibus, itaque voluptates alias sed harum autem possimus! Quae reiciendis inventore repudiandae reprehenderit laboriosam nihil delectus.</p>
            </div>
            
            {/* accordions and video list below */}
            <SideBarAccordions/>

        </div>
    )
}

export default SideBar
