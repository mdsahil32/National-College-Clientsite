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
            my college
            {
                data.map(admissionCollege => <MyCollegeCard
                key={admissionCollege._id}
                admissionCollege={admissionCollege}
                ></MyCollegeCard>)
            }
        </div>
    );
};

export default MyCollege;