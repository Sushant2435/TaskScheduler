import React from 'react'

const Dashboradheader = ({ menu, filterCategory }) => {
    console.log(menu)
    return (
        <div className='flex justify-around mt-20 w-1/2 m-auto font-semibold shadow-sm'>
            {menu.map((item, index) => (
                <button onClick={() => filterCategory(item)} key={item} className={`py-2 flex-1 text-center uppercase bg-gray-50 hover:bg-blue-500 active:bg-blue-500 focus:bg-blue-500 
                        ${index === 0 ? 'border-l border-t rounded-tl-lg rounded-bl-lg border-b' : ''}
                        ${index === menu.length - 1 ? 'border-r border-t rounded-tr-lg rounded-br-lg border-b' : ''}
                        ${index !== 0 && index !== menu.length - 1 ? 'border' : ''}`}
                >
                    {item}
                </button>
            ))
            }
        </div>
    )
}

export default Dashboradheader
