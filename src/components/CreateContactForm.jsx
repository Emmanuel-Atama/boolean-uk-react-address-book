function CreateContactForm(props) {
  // [TODO] Write form handlers here and POST requests here...
  const [formCheckbox, setFormCheckbox] = useState();

  const [userInputs, setUserInputs] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    postcode: ""
  });
  const handleInputs = (event) => {
    console.log("Inside handleInputs: ", event.taget.id);

    setUserInputs(event.target.id);
  };

  const handleSubmit = (event) => {
    event.prevent.deafult();
  };

  const handleCheckbox = (event) => {
    console.log("Inside handleCheckbox: ", event.target.value);

    setFormCheckbox(event.target.value);
  };
  //   const inputs = [
  //     "first-name-input",
  //     "last-name-input",
  //     "street-input",
  //     "city-input",
  //     "post-code-input",

  //   ];
  //   inputs.forEach((input) => {
  //     console.log("Inside input: ", input);
  //   });
  // if (!handleInputs) {
  //   return handleInputs = input
  // }

  //   const handleInputs = (event) => {
  //     console.log("Inside handleInputs: ", event.target.value)

  //     setUserInputs(event.target.value)
  //   }

  return (
    <form
    onSubmit ={props.handleSubmit} className="form-stack light-shadow center contact-form"
    >
      <h1>Create Contact</h1>
      <label htmlFor="first-name-input">First Name:</label>
      <input
        onChange={props.handleInputs}
        id="first-name-input"
        name="first-name-input"
        type="text"
      />
      <label htmlFor="last-name-input">Last Name:</label>
      <input
        onChange={props.handleInputs}
        id="last-name-input"
        name="last-name-input"
        type="text"
      />
      <label htmlFor="street-input">Street:</label>
      <input
        onChange={props.handleInputs}
        id="street-input"
        name="street-input"
        type="text"
      />
      <label htmlFor="city-input">City:</label>
      <input
        onChange={props.handleInputs}
        id="city-input"
        name="city-input"
        type="text"
      />
      <label htmlFor="post-code-input">Post Code:</label>
      <input
        onChange={props.handleInputs}
        id="post-code-input"
        name="post-code-input"
        type="text"
      />
      <div className="checkbox-section">
        <input
          onChange={props.handleCheckbox}
          id="block-checkbox"
          name="block-checkbox"
          type="checkbox"
        />
        <label htmlFor="block-checkbox">Block</label>
      </div>
      <div className="actions-section">
        <button className="button blue" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}

export default CreateContactForm;

