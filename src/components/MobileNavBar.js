const MobileNavBar = ({onToggleMobile}) => {
    return (
        <div className='mobile-navbar'>
            <div className="mobile-logo">
                    <img src="https://import.cdn.thinkific.com/366276/course_player_logo/1620207581889FI_FemaleInvestlogo_240x48px1.png" alt="" />
            </div>

            <i onClick={onToggleMobile} className='bx bx-dialpad-alt'></i>
        </div>
    )
}

export default MobileNavBar
