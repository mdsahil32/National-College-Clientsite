import React from 'react';
import Colleges from '../Colleges/Colleges';
import { useLoaderData } from 'react-router-dom';
import Gellary from '../Gellary/Gellary';

const Home = () => {
  
    return (
        <div>
           <Colleges></Colleges>
           <Gellary></Gellary>
        </div>
    );
};

export default Home;