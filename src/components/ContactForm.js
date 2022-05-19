import { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom'

export default function ContactForm() {
  let navigate = useNavigate;
  const [formData, setFormData] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [terms, setTerms] = useState(false);

  const [validForm, setValidForm] = useState(false);

  const contactFormInfo = {
    firstName: firstName,
    lastName: lastName,
    terms: terms,
  };

  useEffect(() => {
      if(formData.firstName && contactFormInfo.lastName && contactFormInfo.terms) {
      setValidForm(true);
      console.log("It's Working")
  }
  }, [formData.firstName, formData.lastName, formData.terms])

  console.log(formData);

  const sendData = (e) => {
    e.preventDefault(); // do not refresh page
    fetch(`https://sampleapis.com/api-list/coffee/hot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data => console.log('Success:', data))
    .catch(err => console.error(err))
    navigate(-1)
  };

  const setFormObject = (event) => {
    // console.log(event)
    // setFormData(event.target.value)
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  console.log(formData);

  return (
    <>
      <form method="post">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            //   onChange={(event) => setFormData( {...formData, firstName: event.target.value} )} />
            onChange={setFormObject}
          />
        </label>

        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" onChange={setFormObject} />
        </label>

        <br />
        <label>
          Address:
          <input type="text" name="address" onChange={setFormObject} />
        </label>

        <br />
        <label>
          Zip:
          <input
            type="text"
            name="zip"
            maxLength={5}
            onChange={setFormObject}
          />
        </label>

        <br />
        <label>
          State:
          <select name="state" onChange={setFormObject}>
            <option value="fl">FL</option>
            <option value="il">IL</option>
            <option value="ny">NY</option>
            <option value="nj">NJ</option>
          </select>
        </label>
        <br />

        <label>
          Date:
          <input type="date" name="date" />
        </label>
        <br />
        <label>
          Terms and conditions
          <input
            type="checkbox"
            onChange={(event) => setTerms(event.target.checked)}
          />
        </label>
        <br />

        <label>
          message:
          <textarea name="textarea" cols="30" rows="10" />
        </label>
        <br />
        <button onClick={(e) => sendData(e)} disabled={validForm}>
          Submit
        </button>
      </form>
    </>
  );
}
