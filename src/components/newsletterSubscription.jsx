import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import '../styles.css';
import axios from "axios"

// Newsletter component
const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    //alert(`Thank you for subscribing. We look forward to sharing our curated content with you at ${email}.`);
    try {
      let body = {"email": email}
      const response = await axios.post('https://theaidea.pythonanywhere.com/newsletter/api/subscribe', body);
      console.log(response.data.message);
      setStatus('success');
      setMessage('Thank you for subscribing! Check your inbox for updates.');
      setEmail('');
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
        setStatus('success');
        setMessage('You are already subscribed! Check your inbox for updates.');
        setEmail('');
        // Handle case where email is already subscribed
      } else {
        console.error('Error subscribing to newsletter:', error);
        setStatus('error');
        setMessage('Something went wrong. Please try again later.');
        // Handle other errors
      }
    }
  };

  return (
    <section className="newsletter">
      <h2>Subscribe to Our Curated Insights</h2>
      <p>Elevate your inbox with our thoughtfully crafted newsletter.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          required
        />
        <button type="submit"
         disabled={status === 'loading'}
        >{status === 'loading' ? (
          <>
            <Spinner animation="grow" />
            Subscribing...
          </>
        ) : (
          'Subscribe'
        )}</button>
      </form>
      {(status === 'success' || status === 'error') && (
        <Alert variant={status === 'success' ? 'default' : 'destructive'}>
          <div className="flex items-center gap-2">
            {status === 'success' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check2-circle h-4 w-4" viewBox="0 0 16 16">
              <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
              <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle h-4 w-4" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
            </svg>
            )}
            <p>{message}</p>
          </div>
        </Alert>
      )}
    </section>
  );
};

export default Newsletter;