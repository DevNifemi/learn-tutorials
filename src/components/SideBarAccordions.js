import {useState} from'react'
import { Data } from '../assets/Data'

const SideBarAccordions = () => {
    const [dropDown, setDropDown] = useState(false)

    // toggle the accordion
    const toggleAccordion = (index) => {
        if(dropDown === index){
            return setDropDown(false)
        }
        setDropDown(index)
    }

    return (
        <div className="accordion-container">

            {Data.map((info, index) => (

            <div key={index} className="accordion-card">
                <div onClick={() => toggleAccordion(index)} className="accordion">
                    <h1>{info.videoTitle}</h1>
                    <i className={`${ dropDown === index ? 'bx bxs-caret-down-circle' : 'bx bxs-caret-up-circle'}`} style={{color: '#C6C6E9'}}  ></i>
                </div>
                {
                    dropDown === index ? (
                        <div className="accordion-dropdown">
                            <h4>{info.videoSections}</h4>
                        </div>) : ''
                }
            </div>

            ))}

        </div>
    )
}

export default SideBarAccordions
