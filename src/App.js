import { useState, useEffect } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import EditContactForm from "./components/EditContactForm";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);
  const [editContactForm, setEditContactForm] = useState(true)
  const [contactEdit, setContactEdit] = useState([])

  // [TODO] Write a useEffect to fetch contacts here...
  useEffect(() => {
    const url = `http://localhost:3030/contacts`;
    console.log("Inside Url: ", url);

    fetch(url)
      .then((res) => res.json())
      .then((dataContact) => {
        console.log("Inside Get Fetch: ", dataContact);

        setContacts(dataContact);
      });
  }, []);
  
  
  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
        editContactForm={editContactForm}
        setEditContactForm={setEditContactForm}
        setContactEdit={setContactEdit}
      />
      <main>{!hideForm && (<CreateContactForm contacts={contacts} setContacts={setContacts} />)}
            {!editContactForm && (<EditContactForm setContacts={setContacts} contactEdit={contactEdit}/>)}
      </main>
    </>
  );
}
