import React from 'react';
import "./About.css";

function About() {
    return (
        <div className='about'>
            <h2 className='about__title'> About Us</h2>
            <p className='about__desc1'> Dress Up sells fashionable clothing for men and women</p>
            <p className='about__desc2'>What’s interesting on its website is
                the “Custom with us” option, which isn’t common for online fashion stores, but is definitely a plus point!</p >
            <div className="box">
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


        </div >
    )
}

export default About
