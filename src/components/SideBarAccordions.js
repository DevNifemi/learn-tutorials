import {useState} from 'react'
import { setTutorialId } from '../redux/actions'
import store from '../redux/store'

const SideBarAccordions = ({titles}) => {
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

            {titles.map((info, index) => (

            <div key={index} className="accordion-card">
                <div onClick={() => toggleAccordion(index)} className="accordion">
                    <h1>{info.title}</h1>
                    <i className={`${ dropDown === index ? 'bx bxs-caret-down-circle' : 'bx bxs-caret-up-circle'}`} style={{color: '#C6C6E9'}}  ></i>
                </div>
                {
                    dropDown === index ? (
                        <div className="accordion-dropdown">
                            <h4 onClick={handleUserClick.bind(null, info.tutorialId)}>{info.subTitle}</h4>
                        </div>
                        ) : ''
                }
            </div>

            ))}

        </div>
    )
}


  // set the tutorial to view
  function handleUserClick(id) {
    store.dispatch(setTutorialId(id));
  }



export default SideBarAccordions
