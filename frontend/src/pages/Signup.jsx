import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Formdata = Object.fromEntries(formData.entries());
        try {
            const response = await axios.post('http://localhost:3000/signup', Formdata);
            console.log('Signup successful:', response.data);
            alert("login Sucessfully")
            navigate('/login')
        } catch (error) {
            alert("something went wrong")
            console.error('Error signing up:');
        }
    }

    return (
        <div>
            <div>
                <h2 className='text-center text-3xl'>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit} className='bg-indigo-50 w-[350px] mx-auto mt-10 flex flex-col gap-5 px-5 py-16 rounded-2xl'>
                <fieldset>
                    <label htmlFor="name" className='text-xl'>Name: </label>
                    <input type="text" name="name" id="name" className='ml-8 rounded-xl p-2' />
                </fieldset>
                <fieldset>
                    <label htmlFor="email" className='text-xl'>Email: </label>
                    <input type="email" name="email" id="email" className='ml-8 rounded-xl p-2' />
                </fieldset>
                <fieldset>
                    <label htmlFor="password" className='text-xl'>Password: </label>
                    <input type="password" name="password" id="password" className='rounded-xl p-2' />
                </fieldset>
                <button className='p-2 bg-green-400 rounded-lg' type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup;
