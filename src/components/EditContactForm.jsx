import { useEffect, useState } from "react"

export default function EditContactForm(props) {

const {contactEdit} = props
console.log("Inside contactEdit: ", contactEdit)

    // Contact State
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [blockCheckbox, setBlockCheckbox] = useState(false);

 // Address State
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
   event.preventDefault()
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
          Update
        </button>
      </div>
     
    </form>
  );
        </>
    )
}