import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateTaskForm = () => {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const Formdata = Object.fromEntries(formData.entries());
        try {
            const response = await axios.post('http://localhost:3000/createtask', Formdata);
            console.log('Task Created successful:', response.data);
            alert("Task Created Sussessfully")
            navigate('/')
        } catch (error) {
            alert("something went wrong")
            console.error('Error In Creating Task up:');
        }
    }
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl text-red-600 font-semibold'>Create Task</h2>
            </div>
            <form onSubmit={handleSubmit} className='bg-indigo-50 w-[400px] mx-auto mt-10 flex flex-col gap-5 px-5 py-16 rounded-2xl'>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="title" className='text-xl font-semibold'>Title: </label>
                    <input type="text" name="title" id="title" className=' rounded-xl p-2' placeholder='Title' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="description" className='text-xl font-semibold'>Description: </label>
                    <input type="text" name="description" id="description" className='rounded-xl p-2' placeholder='Description' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="status" className='text-xl font-semibold'>Status: </label>
                    <input type="text" name="status" id="status" className='rounded-xl p-2' placeholder='Status' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="scheduletime" className='text-xl font-semibold'>Schedule Time: </label>
                    <input type="text" name="scheduletime" id="scheduletime" className='rounded-xl p-2' placeholder='Schedule Time' />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="taskcategory" className='text-xl font-semibold'>Task Category: </label>
                    <input type="text" name="taskcategory" id="taskcategory" className='rounded-xl p-2' placeholder='Task Category' />
                </fieldset>
                <button className='p-2 bg-green-400 rounded-lg font-semibold' type="submit">Create New  Task</button>
            </form>
        </div>
    )
}
export default CreateTaskForm;
