import React, { useState } from 'react'

export default function AddContacts(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nameEmail, setNameEmail] = useState('')

    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const emailHandler = (event) =>{
        setEmail(event.target.value);
    }

    const submitBtn = (event) => {
        event.preventDefault()
        if(!name && !email){
            return alert('enter both name and email address')
        }
        else{
            setNameEmail({name:name, email:email})
            console.log('nameEmail', nameEmail)
        props.addContactHandler(nameEmail)
        // setEmail('')
        // setName('')
        // props.addContactHandler(name, email);
        }
    }

  return (
    <div className='flex p-6'>
        <form className='flex flex-col justify-center' onSubmit={submitBtn} >
        <span className='text-xl font-semibold '>Name: </span>
        <input className='p-1 border-2 border-x-black border-y-slate-500 rounded-sm mb-6' placeholder='Enter Name' type="text"  onChange={nameHandler} value={name} />

        <span className='text-xl font-semibold '>Email Address: </span>
        <input className='p-1 border-2 border-x-black border-y-slate-500 rounded-sm mb-6' placeholder='Enter Address' type="email" onChange={emailHandler} value={email}  />

        <button type="submit" className='p-2 shadow-sm text-white border-2 rounded-md bg-green-600'>Add Contact</button>
        </form>

    </div>
  )
}
