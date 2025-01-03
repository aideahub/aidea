import React, { useState, useEffect } from 'react';
import '../styles.css';

// Post component
const Post = ({ post }) => (
    <article className="post">
      <img src={post.image} alt={post.imageAlt} className="post-image" />
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
      <a href={`/aidea/post/${post.id}`} className="read-more">Continue Reading</a>
    </article>
  );

export default Post;
  