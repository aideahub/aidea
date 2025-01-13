

import React, { useState, useEffect } from 'react';
import REST_API from '../pages/rest_api';

const BlogContent = ({ contentHtml }) => {

    return (<div dangerouslySetInnerHTML={{ __html: contentHtml }} />);
};




const BlogPost = ({ slug }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const postData = await REST_API.fetchPost(slug);
        setPost(data);
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
      <h1>{post.title}</h1>
      {post.series_info && (
        <div className="series-info">
          Part {post.series_info.part_number} of {post.series_info.title}
        </div>
      )}
      
      {post.content_blocks.map(block => (
        <div key={block.id}>
          {block.block_type === 'text' && (
            <div dangerouslySetInnerHTML={{ __html: block.content.content }} />
          )}
          {block.block_type === 'image' && (
            <figure>
              <img src={block.content.image} alt={block.content.caption} />
              <figcaption>{block.content.caption}</figcaption>
            </figure>
          )}
          {block.block_type === 'formula' && (
            <div className="formula">
              {/* Assuming you're using a math rendering library like KaTeX */}
              <div>{block.content.latex}</div>
              <div>{block.content.description}</div>
            </div>
          )}
        </div>
      ))}

      <nav className="post-navigation">
        {post.navigation.previous && (
          <a href={`/posts/${post.navigation.previous.slug}`}>
            ← {post.navigation.previous.title}
          </a>
        )}
        {post.navigation.next && (
          <a href={`/posts/${post.navigation.next.slug}`}>
            {post.navigation.next.title} →
          </a>
        )}
      </nav>
    </article>
  );
};

export default BlogContent;