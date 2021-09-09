import { useState, useEffect } from "react";
import ContactsList from "./components/ContactsList";
import CreateContactForm from "./components/CreateContactForm";
import "./styles.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [hideForm, setHideForm] = useState(true);

  // [TODO] Write a useEffect to fetch contacts here...
  useEffect(() => {
    const url = `http://localhost:3030/contacts`;
    console.log("Inside Url: ", url);

    fetch(url)
      .then((res) => res.json())
      .then((dataContact) => {
        console.log("Inside Get Fetch: ", dataContact);

        setContacts(...contacts, dataContact);
      });
  }, []);
  
  
  return (
    <>
      <ContactsList
        contacts={contacts}
        hideForm={hideForm}
        setHideForm={setHideForm}
      />
      <main>{!hideForm && <CreateContactForm />}</main>
    </>
  );
}
