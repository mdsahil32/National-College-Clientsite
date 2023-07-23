import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetail = () => {
    const data = useLoaderData([])
    const { college_name, college_rating, admission_date, research_count, college_image, _id } = data

    return (
        <div className='max-w-screen-xl mx-auto my-8'>
            <h3 className='text-4xl text-center underline mb-3 font-bold uppercase'>Details</h3>
            <div>
                <img className='w-full h-96' src={college_image} alt="" />
            </div>
            <div className='border-4 my-6'>
                <h3 className='text-3xl mt-4 font-semibold text-center'>College: {college_name}</h3>
                <div className='flex gap-10 justify-center my-8'>
                    <div className='border-r-8'>
                        <p className='pe-4 text-xl '>Admission: {admission_date}</p>
                    </div>
                    <div className='border-r-8'>
                        <p className='pe-4 text-xl'>College Rating: {college_rating}</p>
                    </div>
                    <div className=''>
                        <p className='text-xl '>Research Count: {research_count}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetail;