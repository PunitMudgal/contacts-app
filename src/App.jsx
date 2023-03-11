import React, { useEffect, useState } from "react";
import AddContacts2 from "./Components/AddContacts2";
import ContactList from "./Components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";

  let initContacts;
  if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
    initContacts = [];
  } else {
    initContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  }

  const [contacts, setContacts] = useState(initContacts);

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  };

  // passed (contact) as argument in the contact function
  const deleteHandler = (remove) => {
    const newContacts = contacts.filter((contact) => {
      // console.log(remove)
      return contact !== remove;
    });
    setContacts(newContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  };

  //* here we get data from local storage when we refresh the page
  // useEffect(() => {
  // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  // if (retriveContacts ) {setContacts(retriveContacts)}
  // },[])

  //* here we put the data into local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1 className="flex justify-center text-3xl text-sky-500 font-bold uppercase mb-6">
          -Contacts-
        </h1>

        <AddContacts2 addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getDeleteId={deleteHandler} />
      </div>
    </>
  );
}

export default App;
//
// contacts={contacts}
