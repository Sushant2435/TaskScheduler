import React from 'react'
import Dashboradheader from './Dashboradheader'
import TaskTable from './TaskTable'

const Dashboard = () => {
    return (
        <div className='text-center'>
            <h1 className='text-red-400 font-semibold text-3xl'>Dashboard Page</h1>
            <Dashboradheader />
            <TaskTable />
        </div>
    )
}

export default Dashboard
