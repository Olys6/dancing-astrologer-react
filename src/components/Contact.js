import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material'
import emailjs from "emailjs-com"

const Contact = () => {

  const [toSend, setToSend] = useState({
    first_name: '',
    last_name: '',
    email: '',
    subject: '',
    enquiry: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_l6goyyw', 'template_0d47gp2', toSend, 'TgrDgpouD70FEDrPu')
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function (error) {
        console.log('FAILED...', error);
      });
  }

  

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return(
    <div className="contactPage">
      <form onSubmit={sendEmail} className="contactBox">
        <Typography variant="h2" color="secondary">Contact</Typography>
        <div className="firstAndLastname">
          <TextField color="secondary" label="First Name" variant="outlined" focused required name="name" value={toSend.first_name} onChange={handleChange} />
          <TextField label="Last Name" text="secondary" color="secondary" variant="filled" focused required name="lastName" value={toSend.last_name} onChange={handleChange} />
        </div>
        <TextField fullWidth label="Email" color="secondary" variant="filled" required name="email" value={toSend.email} onChange={handleChange} />
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
    </div>
  )
}

export default Contact