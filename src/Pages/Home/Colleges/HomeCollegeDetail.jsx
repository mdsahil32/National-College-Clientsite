import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeCollegeDetail = () => {
    const data = useLoaderData()
    const { college_name, admission_dates, events, research_history, sports_name, college_image, _id } = data

    return (
        <div className='max-w-screen-xl mx-auto my-8'>
            <h3 className='text-4xl text-center underline mb-3 font-bold uppercase'>Details</h3>
            <div>
                <img className='w-full h-96' src={college_image} alt="" />
            </div>
            <div className='border-4 my-6'>
                <h3 className='text-3xl mt-4 font-semibold text-center'>College: {college_name}</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 justify-center my-8'>
                    <div className='border-r-8'>
                    <h3 className='text-xl underline'>Admission:</h3>
                        <p className='pe-4 text-xl '> {admission_dates}</p>
                    </div>
                    <div className='border-r-8'>
                        <h3 className='text-xl underline'>Research History:</h3>
                        <p className='pe-4 text-xl'> {research_history}</p>
                    </div>
                    <div className=''>
                    <h3 className='text-xl underline'>Sport:</h3>
                        <p className='text-xl '> {sports_name}</p>
                        <h3 className='text-xl underline'>Events:</h3>
                        <ul>
                            <li>{events[0]}</li>
                            <li>{events[1]}</li>
                            <li>{events[2]}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCollegeDetail;