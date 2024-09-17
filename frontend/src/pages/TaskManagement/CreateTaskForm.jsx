import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const CreateTaskForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [taskData, setTaskData] = useState({
        title: '',
        description: '',
        status: '',
        scheduletime: '',
        taskcategory: ''
    });
    useEffect(() => {
        if (id) {
            const getTask = async () => {
                try {
                    const response = await axios.get(`http://localhost:3000/tasklist/${id}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setTaskData(response.data);
                } catch (error) {
                    console.error('Error fetching task:', error);
                }
            };
            getTask();
        }
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskData({ ...taskData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const taskDetails = Object.fromEntries(formData.entries());

        try {
            if (id) {
                const response = await axios.put(`http://localhost:3000/updatetask/${id}`, taskDetails, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('Task updated successfully:', response.data);
                alert('Task updated successfully');
            } else {
                const response = await axios.post('http://localhost:3000/createtask', taskDetails, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log('Task created successfully:', response.data);
                alert('Task created successfully');
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving task:', error);
            alert('Something went wrong');
        }
    };
    return (
        <div>
            <div>
                <h2 className='text-center text-3xl text-red-600 font-semibold'>{id ? 'Update Task' : 'Create Task'}</h2>
            </div>
            <form onSubmit={handleSubmit} className='bg-indigo-50 w-[400px] mx-auto mt-10 flex flex-col gap-5 px-5 py-16 rounded-2xl'>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="title" className='text-xl font-semibold'>Title: </label>
                    <input type="text" name="title" id="title" className='rounded-xl p-2' placeholder='Title' value={taskData.title} onChange={handleInputChange} />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="description" className='text-xl font-semibold'>Description: </label>
                    <input type="text" name="description" id="description" className='rounded-xl p-2' placeholder='Description' value={taskData.description} onChange={handleInputChange} />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="status" className='text-xl font-semibold'>Status: </label>
                    <select name="status" id="status" className='rounded-xl p-2' value={taskData.status} onChange={handleInputChange}>
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Due">Due</option>
                        <option value="Completed">Completed</option>
                    </select>
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="scheduletime" className='text-xl font-semibold'>Schedule Time: </label>
                    <input type="text" name="scheduletime" id="scheduletime" className='rounded-xl p-2' placeholder='Schedule Time' value={taskData.scheduletime} onChange={handleInputChange} />
                </fieldset>
                <fieldset className='flex flex-col gap-2'>
                    <label htmlFor="taskcategory" className='text-xl font-semibold'>Task Category: </label>
                    <select name="taskcategory" id="taskcategory" className='rounded-xl p-2 ' value={taskData.taskcategory} onChange={handleInputChange}>
                        <option value="">Select Task Category</option>
                        <option value="Completed task">Completed task</option>
                        <option value="Due task">Due task</option>
                        <option value="Pending task">Pending task</option>
                    </select>
                </fieldset>
                <button className='p-2 bg-green-400 rounded-lg font-semibold' type="submit">
                    {id ? 'Update Task' : 'Create New Task'}
                </button>
            </form>
        </div>
    );
};

export default CreateTaskForm;
