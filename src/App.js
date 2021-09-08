import { useState } from "react";
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
      .then((contactsData) => {
        console.log("Inside Get Fetch: ", contactsData);

        setContacts(...contacts, contactsData);
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
