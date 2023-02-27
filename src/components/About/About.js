import React from 'react';
import "./About.css";

function About() {
    return (
        <div className='about'>
            <div className="first__row">
                <h2 className='title'> Create a custom T-shirts!</h2>
                <p className='desc'> It's easy upload your image, tweak your design,  preview the result and purchase</p>
                <button className="create__design"> Create your design </button>

            </div>



            <div className="second__row">
                <h2 className='title'> Printed your own tote bag!</h2>
                <p className='desc'> Be creative, Design your own merchandise for any event or ocassion.</p>
                <button className="create__design"> Create your design </button>

            </div>


        </div>
    )
}

export default About
