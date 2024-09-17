import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

const TaskTable = ({ tasks, setTaskCategory }) => {
    const handleDelete = async (taskId) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:3000/deletetask/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            const updatedTasks = tasks.filter(task => task._id !== taskId);
            setTaskCategory(updatedTasks);
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };
    return (
        <div className='mt-10 flex justify-center '>
            <table className=' border-4'>
                <thead className='border'>
                    <tr className='border border-b-2 bg-gray-100'>
                        <th className='py-2 px-14'>Sr. NO.</th>
                        <th className='py-2 px-14'>Title</th>
                        <th className='py-2 px-14'>Description</th>
                        <th className='py-2 px-14'>Status</th>
                        <th className='py-2 px-14'>Scedule Time</th>
                        <th className='py-2 px-14'>Action</th>
                    </tr>
                </thead>
                <tbody className='border bg-gray-50'>
                    {tasks.map((item, index) => (
                        <tr className='border' key={index}>
                            <td className='py-2 px-14'>{index + 1}.</td>
                            <td className='py-2 px-14'>{item.title}</td>
                            <td className='py-2 px-14'>{item.description}</td>
                            <td className={`py-2 px-14 item ${item.status === 'Pending' ? 'text-yellow-500' : item.status === 'Due' ? 'text-red-500' : item.status === 'Completed' ? 'text-green-600' : ''}`}>{item.status}</td>
                            <td className='py-2 px-14'>{item.scheduletime}</td>
                            <td className='flex items-center py-2 px-14 gap-4'>
                                <Link to={`/updatetask/${item._id}`} className=""><FaRegEdit /></Link>
                                <button onClick={() => handleDelete(item._id)}><MdDelete /></button>
                            </td >
                        </tr >
                    ))}
                </tbody >
            </table >

        </div >
    )
}

export default TaskTable
