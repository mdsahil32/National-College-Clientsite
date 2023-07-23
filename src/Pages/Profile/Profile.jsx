import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className='md:flex max-w-screen-lg mx-auto my-12 md:gap-32'>
            <div>
                <img  className='rounded-full h-80' src={user?.photoURL} alt="" />
            </div>
            <div className='text-2xl space-y-6 font-semibold'>
                <h1>Name: {user?.displayName}</h1>
                <h1>Email: {user?.email}</h1>
                <h3>Creation Time: {user.metadata?.creationTime}</h3>
                <h3>Last SignIn Time:  {user.metadata?.lastSignInTime}</h3>
            </div>
        </div>
    );
};

export default Profile;