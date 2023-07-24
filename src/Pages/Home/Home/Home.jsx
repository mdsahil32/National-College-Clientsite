import React from 'react';
import Colleges from '../Colleges/Colleges';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  
    return (
        <div>
           <Colleges></Colleges>
        </div>
    );
};

export default Home;