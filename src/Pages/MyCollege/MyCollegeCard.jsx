import React from 'react';

const MyCollegeCard = ({ admissionCollege }) => {
    // console.log(admissionCollege);
    const {address, birth, email, img, number, subject, } = admissionCollege
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Email:{email}</h2>
                <p>Address: {address}</p>
                <p>Day Of Birth: {birth}</p>
                <p>Subject: {subject}</p>
                <p>Phone: {number}</p>
            </div>
            <figure><img className='h-52 ' src={img} alt="Shoes" /></figure>
        </div>
    );
};

export default MyCollegeCard;