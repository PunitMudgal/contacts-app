import React from 'react'
import Contact from './Contact'

export default function ContactList(props) {

  // const deleteHandler = (id) => {
  //   props.getDeleteId(id);
  // }

  return (
    <div className='my-3'>
      <h1 className='text-2xl font-bold text-sky-500 uppercase '>Contact List: </h1>
      {props.contacts.map((contact,index) => <Contact contact={contact} key={index} deleteHandler={props.getDeleteId} />)} 
    </div>
  )
}
 