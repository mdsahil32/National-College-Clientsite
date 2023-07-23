import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdmissionTable from './AdmissionTable';

const Admission = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/admissionColleges')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className=''>
            <h3 className='text-center text-4xl uppercase font-semibold underline my-3'>Colleges :-</h3>
            <div className="overflow-x-auto my-12 max-w-screen-lg mx-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th></th>
                            <th>#</th>
                            <th>College Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((college, index) => <AdmissionTable
                            key={college._id}
                            college={college}
                            index={index}
                            ></AdmissionTable>)
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admission;