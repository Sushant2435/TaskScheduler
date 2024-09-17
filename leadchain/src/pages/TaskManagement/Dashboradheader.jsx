import React from 'react'

const Dashboradheader = () => {
    return (
        <div className='flex list-none gap-4 justify-around mt-10  w-1/3 m-auto py-2 shadow-lg'>
            <li className='text-lg hover:text-green-600 cursor-pointer font-semibold focus:text-green-600 active:text-green-600'>UPCOMING TASK</li>
            <li className='text-lg hover:text-green-600 cursor-pointer font-semibold focus:text-green-600 active:text-green-600'> DUE TASK</li>
            <li className='text-lg hover:text-green-600 cursor-pointer font-semibold focus:text-green-600 active:text-green-600'>COMPLETED TASK</li>
        </div>
    )
}

export default Dashboradheader
