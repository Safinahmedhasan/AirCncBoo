import React, { useContext } from 'react';
import avaterImages from '../../../assets/images/placeholder.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Avater = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <img src={user && user.photoURL ? user.photoURL: avaterImages} width='30' height='30' className='rounded-full' alt="" />
        </div>
    );
};

export default Avater;