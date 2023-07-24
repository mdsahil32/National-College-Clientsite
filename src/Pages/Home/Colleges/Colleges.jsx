import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';
import { useLoaderData } from 'react-router-dom';

const Colleges = () => {
    const loader = useLoaderData()
    // console.log(loader);
    const [searchText, setSearchText] = useState('')
    const [college, setCollege] = useState(loader)

    const handleSearch = (e) => {
        
        fetch(`https://national-college-serversite.vercel.app/homeCollege/${searchText}`)
            .then(res => res.json())
            .then(data => setCollege(data))
    }

    return (
        <div className='mt-6'>
            <div className="form-control">
                <div className="input-group items-center justify-center">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1  gap-6 max-w-screen-xl mx-auto my-12 '>
                {
                    college.map(college => <CollegeCard
                        key={college._id}
                        college={college}
                    ></CollegeCard>)
                }
            </div>

        </div>
    );
};

export default Colleges;