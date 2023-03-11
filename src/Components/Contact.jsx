import React from 'react'

export default function Contact(props) {
  // console.log(props)
  return (
    <div className='flex flex-row justify-between items-center p-2 my-2 bg-gray-100 hover:bg-gray-200 rounded-md'>
        <div className='flex flex-col items-center mr-6'>
            <h4 className='text-xl self-start font-semibold '>{props.contact.name}</h4>
            <p className='text-md self-start font-medium text-gray-500 '>{props.contact.email}</p>
        </div>
        <button onClick={()=>props.deleteHandler(props.contact)} className='p-1 text-white rounded-md bg-red-600'>Delete</button>
    </div>
  )
}
