import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TaskTable = () => {
    return (
        <div className='mt-10 flex justify-center'>
            <table className='border'>
                <thead className='border'>
                    <tr className='border'>
                        <th className='py-2 px-14'>Sr. NO.</th>
                        <th className='py-2 px-14'>Title</th>
                        <th className='py-2 px-14'>Description</th>
                        <th className='py-2 px-14'>Status</th>
                        <th className='py-2 px-14'>Scedule Time</th>
                        <th className='py-2 px-14'>Action</th>
                    </tr>
                </thead>
                <tbody className='border'>
                    <tr className='border'>
                        <td className='py-2 px-14'>1.</td>
                        <td className='py-2 px-14'>Home Page</td>
                        <td className='py-2 px-14'>This is about ui Design</td>
                        <td className='py-2 px-14 text-red-600'>Pending</td>
                        <td className='py-2 px-14'>03:00 PM</td>
                        <td className='flex items-center py-2 px-14 gap-2'>
                            <button className=""><FaRegEdit /></button>
                            <button className=""><MdDelete /></button>
                            <button>Update</button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='py-2 px-14'>2.</td>
                        <td className='py-2 px-14'>Home Page</td>
                        <td className='py-2 px-14'>This is about ui Design</td>
                        <td className='py-2 px-14 text-green-600'>Completed</td>
                        <td className='py-2 px-14'>03:00 PM</td>
                        <td className='flex items-center py-2 px-14 gap-2'>
                            <button className=""><FaRegEdit /></button>
                            <button className=""><MdDelete /></button>
                            <button>Update</button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='py-2 px-14'>3.</td>
                        <td className='py-2 px-14'>Home Page</td>
                        <td className='py-2 px-14'>This is about ui Design</td>
                        <td className='py-2 px-14 text-red-600'>Pending</td>
                        <td className='py-2 px-14'>03:00 PM</td>
                        <td className='flex items-center py-2 px-14 gap-2'>
                            <button className=""><FaRegEdit /></button>
                            <button className=""><MdDelete /></button>
                            <button>Update</button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='py-2 px-14'>4.</td>
                        <td className='py-2 px-14'>Home Page</td>
                        <td className='py-2 px-14 '>This is about ui Design</td>
                        <td className='py-2 px-14 text-green-600'>Completed</td>
                        <td className='py-2 px-14'>03:00 PM</td>
                        <td className='flex items-center py-2 px-14 gap-2'>
                            <button className=""><FaRegEdit /></button>
                            <button className=""><MdDelete /></button>
                            <button>Update</button>
                        </td>
                    </tr>
                    <tr className='border'>
                        <td className='py-2 px-14'>5.</td>
                        <td className='py-2 px-14'>Home Page</td>
                        <td className='py-2 px-14'>This is about ui Design</td>
                        <td className='py-2 px-14 text-red-600'>Pending</td>
                        <td className='py-2 px-14'>03:00 PM</td>
                        <td className='flex items-center py-2 px-14 gap-2'>
                            <button className=""><FaRegEdit /></button>
                            <button className=""><MdDelete /></button>
                            <button>Update</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default TaskTable
