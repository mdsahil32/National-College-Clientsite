import React, { useEffect, useState } from 'react';
import MyCollegeCard from './MyCollegeCard';

const MyCollege = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/admissionFormFill')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-12 gap-4 my-6'>
                {
                    data.map(admissionCollege => <MyCollegeCard
                        key={admissionCollege._id}
                        admissionCollege={admissionCollege}
                    ></MyCollegeCard>)
                }
            </div>
        </div>
    );
};

export default MyCollege;