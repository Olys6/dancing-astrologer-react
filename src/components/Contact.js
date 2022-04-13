import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import emailjs from "emailjs-com"

const Contact = () => {

  let navigate = useNavigate();
  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    enquiry: '',
  });
  const [success, setSuccess] = useState()
  const [isError, setIsError] = useState()
  const [emailError, setEmailError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if (validator.isEmail(toSend.email)) {
      emailjs.send('service_l6goyyw', 'template_0d47gp2', toSend, 'TgrDgpouD70FEDrPu')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          setSuccess(true)
          setIsError(false)
        }, function (error) {
          console.log('FAILED...', error);
          setSuccess(false)
          setIsError(true)
        });

      setEmailError(false)
    }
    
    setEmailError(true)

  }

  const handleChange = (e) => {

    if (e.target.name === "email" ) {
      if (validator.isEmail(toSend.email)) {
        setEmailError(false)
      } else {
        setEmailError(true)
      }
    }

    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if(success === true) {
      setTimeout(() => {
        return navigate('/')
      }, 3000)
    }
  })

  return (
    <div className="contactPage">
      <form onSubmit={sendEmail} className="contactBox">
        <Typography variant="h2" color="secondary">Contact</Typography>
        {success && <Alert severity="success" className="loginAlert animate__animated animate__bounceIn">Success! You will soon be redirected to the home page</Alert>}
        {isError && <Alert severity="error" className="loginAlert animate__animated animate__bounceIn">Error - Please try again later</Alert>}

        <div className="firstAndLastname">
          <TextField label="First Name" text="secondary" color="secondary" variant="filled" focused required name="first_name" value={toSend.first_name} onChange={handleChange} />
          <TextField label="Last Name" text="secondary" color="secondary" variant="filled"  required name="last_name" value={toSend.last_name} onChange={handleChange} />
        </div>
        {!emailError ?
          <TextField fullWidth label="Email" color="secondary" variant="filled" required name="email" value={toSend.email} onChange={handleChange} />
        :
          <TextField sx={{ marginBottom: "-23px" }} error fullWidth label="Email" helperText="Invalid Email" color="secondary" variant="filled" required name="email" value={toSend.email} onChange={handleChange} />
        }
        
        
        <TextField
          fullWidth
          label="Subject"
          rows={4}
          variant="filled"
          color="secondary"
          name="subject"
          required
          value={toSend.subject}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Enquiry"
          multiline
          rows={4}
          variant="filled"
          color="secondary"
          name="enquiry"
          required
          value={toSend.enquiry}
          onChange={handleChange}
        />
        <Button color="secondary" variant="contained" type="submit" value="send">Submit</Button>
      </form>
    </div >
  )
}

export default Contact