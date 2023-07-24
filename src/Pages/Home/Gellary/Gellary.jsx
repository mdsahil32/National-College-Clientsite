import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"

const Gellary = () => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
        },
    })
    return (
        <div className='max-w-screen-xl mx-auto my-24'> 
            <h2 className='text-4xl uppercase font-semibold text-center my-4 underline'>graduate's group pictures</h2>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1"><img src="https://img.freepik.com/premium-photo/group-students-attending-graduation-ceremony-nice-day_115086-774.jpg?w=2000" alt="" /></div>
                
                
                <div className="keen-slider__slide number-slide1"><img src="https://www.insidehighered.com/sites/default/files/styles/max_650x650/public/media/Getty/GettyImages-475846573.jpg?itok=60N_RcdN" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://www.gettingsmart.com/wp-content/uploads/2017/05/Graduate-Readiness.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://img.freepik.com/premium-photo/study-together-group-students-standing-campus_115086-253.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://asc.dso.iastate.edu/files/images/2023-03/Screen%20Shot%202023-03-24%20at%203.47.02%20PM.jpg" alt="" /></div>
                <div className="keen-slider__slide number-slide1"><img src="https://content.cdntwrk.com/mediaproxy?url=https%3A%2F%2Fcontent.cdntwrk.com%2Ffiles%2FaHViPTEwODUzNiZjbWQ9aXRlbWVkaXRvcmltYWdlJmZpbGVuYW1lPWl0ZW1lZGl0b3JpbWFnZV82MjMwZTQ5YTRkNzczLnBuZyZ2ZXJzaW9uPTAwMDAmc2lnPTA3ODJkN2QzN2RlM2E2ZDk2N2M3MmJkNzFhY2RlNTkx&size=1&version=1680626600&sig=86083e202b0fdec629228fd945a950a5&default=hubs%2Ftilebg-blogs.jpg" alt="" /></div>
                
            </div>
        </div>
    );
};

export default Gellary;