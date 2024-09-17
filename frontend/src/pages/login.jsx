import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Formdata = Object.fromEntries(formData.entries());
        try {
            const response = await axios.post('http://localhost:3000/login', Formdata);
            const { user, token } = response.data;
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
            alert("login successfully")
            navigate('/')
        } catch (error) {
            alert("something went wrong")
        }
    }
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl'>Login</h2>
            </div>
            <form onSubmit={handleSubmit} className='bg-indigo-50 w-[350px] mx-auto mt-10 flex flex-col gap-5 px-5 py-16 rounded-2xl'>
                <fieldset>
                    <label htmlFor="email" className='text-xl'>Email:</label>
                    <input type="email" name="email" id="email" className='ml-9 p-2 rounded-xl bg-white' />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className='text-xl'>Password:</label>
                    <input type="password" name="password" id="password" className='rounded-xl p-2' />
                </fieldset>
                <button className='p-2 bg-green-400 rounded-lg' type="submit">Login</button>
                <div>If you don't have an account, please <Link to='/signup' className="text-green-400">Register</Link></div>
            </form>
        </div>
    )
}

export default Login;
