function ContactsList(props) {
  const { contacts, hideForm, setHideForm, editContactForm, setEditContactForm, setContactEdit } = props;

  return (
    <aside className="contacts-section light-shadow">
      <header>
        <h2>Contacts</h2>
        <button
          onClick={() => {setEditContactForm(!editContactForm), setHideForm(!hideForm)}}
          className="button new-contact-btn"
        >
          {hideForm ? "Create" : "Cancel"}
        </button>
      </header>
      <ul>
        {contacts.map((contact, index) => {
          const { firstName, lastName, street, postCode } = contact;
console.log("Inside Contact: ", contact)
          return (
            <li key={index}>
              <h3>
                {firstName} {lastName}
              </h3>
                <p>
                  {street}, {postCode}
                </p>
              <button
          onClick={() => {setEditContactForm(!editContactForm), setContactEdit(contact)}}
          className="button new-contact-btn"
        >
          {editContactForm ? "Edit" : "Cancel"}
        </button>
        </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ContactsList;