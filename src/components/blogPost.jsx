

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import REST_API from '../pages/rest_api';

const BlogContent = ({ contentHtml }) => {

    return (<div dangerouslySetInnerHTML={{ __html: contentHtml }} />);
};




const BlogPost = () => {
  const { slug } = useParams(); // Access the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await REST_API.fetchPost(slug);
        setPost(postData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching post:', error);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <article>
        <img src={post.intro_image} className="post-image" />

      <header>
        <h1>{post.title}</h1>
        <meta name="description" content="Learn about Graph Neural Networks (GNNs), how they work, and why they are important for AI applications. A comprehensive introduction to GNNs." />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.abstract} />
        <meta property="og:type" content="article" />
      </header>
      <BlogContent contentHtml={post.content_html}/>
    </article>
  );
};

export default BlogPost;