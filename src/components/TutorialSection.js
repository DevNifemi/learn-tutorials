import store from "../redux/store"

const TutorialSection = ({onToggle, toggle, active}) => {
    const states = store.getState()
    const activeTutorialContent = states.tutorialContentsReducer[active]
    const { vidUrl, title, resourceTitle} = activeTutorialContent
    return (
        <div>
            {/* video section nav  */}
             <nav>
               <h4>{title}</h4> 
               <i 
               onClick={onToggle}
               className={`${toggle ? 'bx bx-fullscreen' : 'bx bx-exit-fullscreen'}`}></i>
            </nav>

            {/* the  video and its information  */}
            <div className="tutorial-content">
                <img src={vidUrl} alt="tutorial-video" />

                <div className="tutorial-info"> 
                    <h2>{resourceTitle}</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eligendi totam excepturi eos explicabo itaque cupiditate repudiandae, placeat delectus sequi sit illo ipsa aliquam nobis iste ducimus corporis quos. Autem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium reprehenderit, corporis officiis ut possimus, unde odit, illum odio optio nam rem facere! Eos mollitia eius eveniet perspiciatis explicabo excepturi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, optio quod blanditiis velit error molestiae excepturi provident ullam mollitia in labore ut nemo nobis quaerat nam, fugit molestias, reprehenderit quae.
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis magnam optio voluptatibus animi incidunt unde ab consequuntur eveniet ad. Debitis expedita enim exercitationem rerum reprehenderit sit itaque laudantium voluptatum.</p>
                </div>
            </div>

            {/* navigate to next course  */}
            <div className="btn next-course">
                <a  href='/'>Complete the next course <i className='bx bx-cycling'></i></a>
            </div>
            
        </div>
    )
}

export default TutorialSection
