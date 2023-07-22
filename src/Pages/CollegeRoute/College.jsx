import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

const College = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <>
        <h3 className='text-4xl text-center underline my-3 font-bold uppercase'>Colleges</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto my-12'>
                {
                    data.map(college => <CollegeCard
                        key={college._id}
                        college={college}
                    ></CollegeCard>)
                }
            </div>
        </>
    );
};

export default College;