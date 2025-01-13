import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles.css';

// Post component
const PostDetails = ({ post }) => {
  return (
    <article className="post">
      <img src={post.intro_image} alt={post.imageAlt || post.title} className="post-image" />
      <h2>{post.title}</h2>
      <p>{post.abstract}</p>
      <Link to={`/aidea/posts/${post.slug}`} className="read-more">Continue Reading</Link> {/* Updated URL structure */}
    </article>
  );
};

export default PostDetails;
  