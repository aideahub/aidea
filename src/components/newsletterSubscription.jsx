import React, { useState, useEffect } from 'react';
import '../styles.css';


// Newsletter component
const Newsletter = () => {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Thank you for subscribing. We look forward to sharing our curated content with you at ${email}.`);
      setEmail('');
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