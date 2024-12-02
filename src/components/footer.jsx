import React, { useState, useEffect } from 'react';
import '../styles.css';

// Footer component
const Footer = () => (
    <footer>
      <p>&copy; {new Date().getFullYear()} The AIdea. All rights reserved.</p>
    </footer>
  );

export default Footer;