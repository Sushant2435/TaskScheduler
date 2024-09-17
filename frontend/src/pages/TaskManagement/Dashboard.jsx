import React, { useState, useEffect } from 'react';
import Dashboradheader from './Dashboradheader'
import TaskTable from './TaskTable';
import axios from 'axios';

const Dashboard = () => {
    const [tasks, setTasks] = useState([]);
    const [menuList, setMenuList] = useState([]);
    const [taskCategory, setTaskCategory] = useState([]);
    useEffect(() => {
        const taskLists = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tasklist');
                const taskData = response.data;
                setTasks(taskData);

                const uniqueCategories = ['All', ...new Set(taskData.map((task) => task.taskcategory))];
                setMenuList(uniqueCategories);
                setTaskCategory(taskData);
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };
        taskLists();
    }, []);
    const filterItem = (taskcategory) => {
        if (taskcategory === 'All') {
            setTaskCategory(tasks);
            return;
        }
        const updatedList = tasks.filter((curElem) => curElem.taskcategory === taskcategory);
        console.log(updatedList)
        setTaskCategory(updatedList);
    };
    return (
        <div className='text-center'>
            <h1 className='text-red-400 font-semibold text-3xl'>Dashboard Page</h1>
            <Dashboradheader menu={menuList} filterCategory={filterItem} />
            <div className=''>
                {tasks.length > 0 ? <TaskTable tasks={taskCategory} setTaskCategory={setTaskCategory} /> : <p>No tasks available</p>}
            </div>
        </div>
    );
};

export default Dashboard;
