import { useState } from "react";

function CreateContactForm(props) {

const {contacts, setContacts} = props

 // Contact State
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [blockCheckbox, setBlockCheckbox] = useState(false);

 // Address State
 const [street, setStreet] = useState("")
 const [city, setCity] = useState("")
 const [postCode, setPostCode] = useState("")

 console.log("Inside State: ", {firstName, lastName, blockCheckbox, street, city, postCode})

  // [TODO] Write form handlers here and POST requests here...
 const handleFirstName = (event) => {
    // console.log("Inside handleFirstName: ", event.target.value)

    setFirstName(event.target.value);
  };


  const handleLastName = (event) => {
  // console.log("Inside handleLastName: ", event.target.value)

    setLastName(event.target.value);
  };

  const handleBlockCheckbox = (event) => {
// console.log("Inside handleBlockCheckbox: ", event.target.checked)

setBlockCheckbox(event.target.checked)
 }

 const handleStreet = (event) => {
  // console.log("Inside handleStreet: ", event.target.value)

    setStreet(event.target.value);
  };
  const handleCity = (event) => {
    // console.log("Inside handleCity: ", event.target.value)
  
      setCity(event.target.value);
    };
    const handlePostCode = (event) => {
      // console.log("Inside handlePostCode: ", event.target.value)
    
        setPostCode(event.target.value);
      };
  const handleSubmit = (event) => {
    event.preventDefault();

const addressToCreate = {
  street,
  city,
  postCode,
}

    const fetchAddress = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addressToCreate),
    }
    fetch("http://localhost:3030/addresses", fetchAddress)
      .then((res) => res.json())
      .then(newAddress => {
        console.log("addresses POST request: ", newAddress)

        const contactToCreate = {
          firstName,
          lastName,
          blockCheckbox,
          addressId: newAddress.id,
        }
    
        const fetchContact = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactToCreate),
        }
        fetch("http://localhost:3030/contacts", fetchContact)
        .then(res => res.json())
        .then(newContact => {
          console.log("addresses POST request: ", newContact)
          const contactToAdd = {
            ...newContact,
            address: newAddress,
          }

          console.log("contact to add: ", contactToAdd)

          setContacts([...contacts, contactToAdd])
    })
      })

  }

  return (
    <form
    onSubmit ={handleSubmit} className="form-stack light-shadow center contact-form"
    >
      <h1>Create Contact</h1>
      <label htmlFor="first-name-input">First Name:</label>
      <input
        onChange={handleFirstName}
        id="first-name-input"
        name="first-name-input"
        type="text"
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
        onChange={handleLastName}
        id="last-name-input"
        name="last-name-input"
        type="text"
      />
      <label htmlFor="street-input">Street:</label>
      <input
        onChange={handleStreet}
        id="street-input"
        name="street-input"
        type="text"
      />
      <label htmlFor="city-input">City:</label>
      <input
        onChange={handleCity}
        id="city-input"
        name="city-input"
        type="text"
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
        onChange={handlePostCode}
        id="post-code-input"
        name="post-code-input"
        type="text"
      />
      <div className="checkbox-section">
        <input
          onChange={handleBlockCheckbox}
          id="block-checkbox"
          name="block-checkbox"
          type="checkbox"
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button onClick={handleSubmit} className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateContactForm;

