import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const CatllToAction = () => {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(false); // State to track email validity

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yq9jp2i', 'template_d0o2egg', form.current, {
        publicKey: 'nlKRI57h8AP9_iHGM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Clear the form fields
          setEmailValid(false); // Reset email validity
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    // Basic email validation
    setEmailValid(email.includes('@') && email.length > 5);
  };

  const handleSend = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your contact has been sent",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div id='contact'>
      <section className='cta'>
        <div className='cta-text'>
          <h2>Let’s Talk!</h2>
          <p>I’m always open to new opportunities, whether you're an agency looking for a front-end developer or a startup in need of a responsive website.</p>
        </div>
        <div className='cta-form'>
          <form ref={form} onSubmit={sendEmail}>
            <label>Name:</label>
            <input
              type="text"
              name="user_name"
              placeholder='Name'
            />
            <label>Email: *</label>
            <input
              type="email"
              name="user_email"
              placeholder='Email'
              onChange={handleEmailChange}
              required
            />
            <label>Message:</label>
            <textarea name="message" 
              placeholder='message...'/>
            <input
              type="submit"
              value="Send"
              onClick={handleSend}
              disabled={!emailValid} // Disable button if email is not valid
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default CatllToAction;
