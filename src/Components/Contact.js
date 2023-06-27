import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const [result, setResult] = useState()
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('gmail', 'template_ffjc3vo', form.current, '9Y3o3DOWT7eW_LTIg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      
  };

  const newLocal = 'submit ';
  return (
    <div className='contactme'>
    <h2>Contact Me</h2>
    <form ref={form} onSubmit={sendEmail} className='form-details'>
      <input type="text" name="from_name" placeholder='Name'/>
      <input type="text" name="to_name" placeholder='Email'/>
      <textarea name="message" placeholder='Message' />
      <input type="submit" value="Send" className={newLocal}/>
    </form>
    </div>
  );
};
