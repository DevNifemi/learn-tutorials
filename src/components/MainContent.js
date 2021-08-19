import React from 'react';

const MainContent = ({onToggle, toggle}) => {

    return (
        <div className='main-content'>

            {/* video section nav  */}
            <nav>
               <h4>Welcome to big head tutorial!</h4> 
               <i 
               onClick={onToggle}
               className={`${toggle ? 'bx bx-fullscreen' : 'bx bx-exit-fullscreen'}`}></i>
            </nav>

            {/* the  video and its information  */}
            <div className="tutorial-content">
                <img src="https://femi-port.vercel.app/img/project-japan.png" alt="tutorial-video" />

                <div className="tutorial-info">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eligendi totam excepturi eos explicabo itaque cupiditate repudiandae, placeat delectus sequi sit illo ipsa aliquam nobis iste ducimus corporis quos. Autem? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium reprehenderit, corporis officiis ut possimus, unde odit, illum odio optio nam rem facere! Eos mollitia eius eveniet perspiciatis explicabo excepturi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, optio quod blanditiis velit error molestiae excepturi provident ullam mollitia in labore ut nemo nobis quaerat nam, fugit molestias, reprehenderit quae.

                    <h2>Learn Js</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis magnam optio voluptatibus animi incidunt unde ab consequuntur eveniet ad. Debitis expedita enim exercitationem rerum reprehenderit sit itaque laudantium voluptatum.</p>
                </div>
            </div>

            {/* navigate to next course  */}
            <div className="btn next-course">
                <a  href='/'>Complete the next course <i class='bx bx-cycling'></i></a>
            </div>

        </div>
    )
}

export default MainContent
