import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const user = JSON.parse(localStorage.getItem('user')) || null;

    let authInitialName = '';

    if (user && user.user && user.user.name) {
        authInitialName = user.user.name[0];
    }
    return (
        <div className="flex justify-between px-10 mt-2">
            <Link to='/' className='font-semibold text-3xl'>Sushant</Link>
            <div className='flex items-center gap-5'>
                <Link to='/createtask' className='font-semibold bg-blue-500 py-2 px-4 text-white rounded-3xl '>Create Task</Link>
                {user && user.user ? (
                    <div className='h-10 w-10 rounded-full justify-center items-center flex border bg-slate-400 text-3xl text-red-600 font-bold'>
                        {authInitialName}
                    </div>
                ) : (
                    <Link to='/login' className='font-semibold'>Login</Link>
                )}
            </div>

        </div>
    );
}

export default Header;
