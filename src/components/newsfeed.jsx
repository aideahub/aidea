import React, { useState, useEffect } from 'react';
import '../styles.css';

// NewsFeed component
const NewsFeed = ({ newsFeed }) => (
    <section className="news-feed">
      <h3>Latest News</h3>
      {newsFeed.map(item => (
        <div key={item.id} className="news-item">
          <h4>{item.title}</h4>
          <p>{item.summary}</p>
          <a href={item.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </section>
  );

export default NewsFeed;