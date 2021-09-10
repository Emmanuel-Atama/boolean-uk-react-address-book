import { useEffect, useState } from "react"

export default function EditContactForm(props) {

const {contactEdit, contacts, setContacts} = props
console.log("Inside contactEdit: ", contactEdit)

 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [blockCheckbox, setBlockCheckbox] = useState(false);
 const [street, setStreet] = useState("")
 const [city, setCity] = useState("")
 const [postCode, setPostCode] = useState("")

 useEffect(() => {
   if(contactEdit){
     setFirstName(contactEdit.firstName)
     setLastName(contactEdit.lastName)
     setBlockCheckbox(contactEdit.blockCheckbox)
     setStreet(contactEdit.address.street)
     setCity(contactEdit.address.city)
     setPostCode(contactEdit.address.postCode)
   }
 }, [contactEdit])

 const handleFirstName = (event) => {setFirstName(event.target.value);};

const handleLastName = (event) => {setLastName(event.target.value);};

const handleBlockCheckbox = (event) => {setBlockCheckbox(event.target.checked)}

const handleStreet = (event) => {setStreet(event.target.value);};

const handleCity = (event) => {setCity(event.target.value);};

const handlePostCode = (event) => {setPostCode(event.target.value);};

const handleSubmit = (event) => {
event.preventDefault()

      const addressToUpdate = {
        street,
        city,
        postCode,
      }
      
          const fetchAddressToUpdate= {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addressToUpdate),
          }
          const url = "http://localhost:3030/addresses"
          fetch(url, fetchAddressToUpdate)
            .then((res) => res.json())
            .then(updatedAddress => {
              console.log("addresses POST request: ", updatedAddress)

              const contactToUpdate = {
                firstName,
                lastName,
                blockCheckbox,
                addressId: updatedAddress.id,
              };
              const fetchContactToUpdate = {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(contactToUpdate)
              };
              const url = `http://localhost:3030/contacts/${contactEdit.id}`
              fetch(url, fetchContactToUpdate)
                .then((res) => res.json())
                .then((updatedContact) => {
                  console.log("Inside PATCH Fetch: ", updatedContact)
            
                  const updatingContact = {
                    ...updatedContact
                  }
                  setContacts([...contacts, updatingContact])
            })
            });
 }    

 return(
        <>
<form
    onSubmit ={handleSubmit} className="form-stack light-shadow center contact-form"
    >
      <h1>Edit Contact</h1>
      <label htmlFor="first-name-input">First Name:</label>
      <input
        id="first-name-input"
        name="first-name-input"
        type="text"
        value={firstName}
        onChange={handleFirstName}
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
        id="last-name-input"
        name="last-name-input"
        type="text"
        value={lastName}
        onChange={handleLastName}
      />
      <label htmlFor="street-input">Street:</label>
      <input
        id="street-input"
        name="street-input"
        type="text"
        value={street}
        onChange={handleStreet}
      />
      <label htmlFor="city-input">City:</label>
      <input
        id="city-input"
        name="city-input"
        type="text"
        value={city}
        onChange={handleCity}
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
        id="post-code-input"
        name="post-code-input"
        type="text"
        value={postCode}
        onChange={handlePostCode}
      />
      <div className="checkbox-section">
        <input
          id="block-checkbox"
          name="block-checkbox"
          type="checkbox"
          checked={blockCheckbox}
          onChange={handleBlockCheckbox}
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button className="button blue" type="submit">
          Update Details
        </button>
      </div>
     
    </form>
  );
        </>
    )
}