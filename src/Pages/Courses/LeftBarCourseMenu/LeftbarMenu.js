import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const LeftbarMenu = ({ sidemenu }) => {
    const { id, title } = sidemenu;
    return (
        <div>
            <div className=" bg-amber-100 shadow-xl pb-2 pt-2 rounded">

                <NavLink to={`/courseDetails/${id}`}
                    className='py-2'>
                    <p className='pl-4 text-xl font-bold bg-purple-800 mx-2 py-2 rounded-lg text-white flex  items-center text-start'><FaCheck className='mr-2'></FaCheck> {title}</p>
                </NavLink>


            </div>
        </div>
    );
};

export default LeftbarMenu;