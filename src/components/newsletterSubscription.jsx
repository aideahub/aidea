import React, { useState, useEffect } from 'react';
import '../styles.css';
import axios from "axios"

// Newsletter component
const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing. We look forward to sharing our curated content with you at ${email}.`);
    try {
      const response = await axios.post('https://theaidea.pythonanywhere.com/newsletter/api/subscribe/', { email });
      console.log(response.data.message);
      // Handle success (e.g., show a success message to the user)
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data.message);
        // Handle case where email is already subscribed
      } else {
        console.error('Error subscribing to newsletter:', error);
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
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
};

export default Newsletter;