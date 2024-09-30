import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        setUser(storedUser);
    }, []);

    const authInitialName = user && user.name ? user.name[0] : '';

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between px-10 mt-2">
            <Link to='/' className='font-semibold text-3xl'>Sushant</Link>
            <div className='flex items-center gap-5'>
                <Link to='/createtask' className='font-semibold bg-blue-500 py-2 px-4 text-white rounded-3xl '>Create Task</Link>

                {user ? (
                    <div className="relative">
                        <div onClick={toggleDropdown} className='cursor-pointer h-10 w-10 rounded-full flex justify-center items-center border bg-slate-400 text-3xl text-red-600 font-bold'>
                            {authInitialName}
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg">
                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to='/login' className='font-semibold'>Login</Link>
                )}
            </div>
        </div>
    );
}
export default Header;
