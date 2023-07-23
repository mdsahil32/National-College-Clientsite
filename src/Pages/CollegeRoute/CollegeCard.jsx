import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    const { college_name, college_rating, admission_date, research_count, college_image, _id } = college
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='h-80 w-96' src={college_image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{college_name}</h2>
                <div className='space-y-3'>
                    <p>Rating: {college_rating}</p>
                    <p>Admission: {admission_date}</p>
                    <p>Research: {research_count}</p>
                </div>
                <div className="card-actions justify-center mt-6">
                    <Link to={`/college/${_id}`}><button className="btn btn-neutral">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;