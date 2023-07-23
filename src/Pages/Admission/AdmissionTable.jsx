import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionTable = ({college, index}) => {
    return (
      
            <tr className='text-xl'>
                <td></td>
                <td>{index + 1}</td>
                <Link to={'/admissionForm'}><td className='hover:text-black hover:bg-gray-300'>{college.name}</td></Link>
            </tr>
    );
};

export default AdmissionTable;