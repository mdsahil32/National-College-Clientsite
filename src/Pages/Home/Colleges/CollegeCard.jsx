import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    // console.log(college);
    const { college_name, admission_dates, events, research_history, sports_name, college_image,_id } = college
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='h-96 w-full' src={college_image} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">College: {college_name}</h2>
                <p>Admission Date: {admission_dates}</p>
                <p>Research History: {research_history}</p>
                <ul>
                    <p className='underline'>Events:</p>
                    <li>{events[0]}</li>
                    <li>{events[1]}</li>
                    <li>{events[2]}</li>
                </ul>
                <p>Sports: {sports_name}</p>
                <div className="card-actions justify-end">
                    <Link to={`/homeCollege/${_id}`}><button className="btn btn-neutral">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CollegeCard;