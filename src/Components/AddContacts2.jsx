import React, { useState } from "react";

export default function AddContacts(props) {
  const [nameEmail, setNameEmail] = useState({ name: "", email: "" });
  // const [sno, setSno] = useState(0)
 
  const inputHandler = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.type);
    //* using this event.target we can print any thing from the input field 

    const value = event.target.value;
    const type = event.target.type;

    setNameEmail((preValue) => {
    //   console.log(preValue);
    if(type === 'text'){
        return {
            name: value,
            email: preValue.email
        }
    }
    else if(type === 'email'){
        return {
            name: preValue.name,
            email: value
        }
    }
    });
  };


  const submitBtn = (event) => {
    event.preventDefault();
    if(!nameEmail.name || !nameEmail.email){
        return alert('Both Fields are mendatory')
    }
    else{
    props.addContactHandler(nameEmail);
    console.log(nameEmail)
    }
  }; 

  return (
    <div className="flex p-6">
      <form className="flex flex-col justify-center" onSubmit={submitBtn}>
        <span className="text-xl font-semibold ">Name: </span>
        <input
          className="p-1 border-2 border-x-black border-y-slate-500 rounded-sm mb-6"
          placeholder="Enter Name"
          type="text"
          onChange={inputHandler}
          value={nameEmail.name}
        />

        <span className="text-xl font-semibold ">Email Address: </span>
        <input
          className="p-1 border-2 border-x-black border-y-slate-500 rounded-sm mb-6"
          placeholder="Enter Address"
          type="email"
          onChange={inputHandler}
          value={nameEmail.email}
        />

        <button
          type="submit"
          className="p-2 shadow-sm text-white border-2 rounded-md bg-green-600"
        >
          Add Contact
        </button>
      </form>
    </div>
  );
}
