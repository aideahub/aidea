import React, { useState, useEffect } from 'react';
import PostDetails from '../components/postDetails';
import NewsFeed from '../components/newsfeed';
import Newsletter from '../components/newsletterSubscription';
import GNNPostsList from './posts/gnn/introGNN';
import REST_API from './rest_api';

const HomePage = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await REST_API.listPostsDetails();
        setPosts(data)
        console.log("Fetched posts:", data); // Handle the data as needed
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const newsFeed = [
    {
      id: 1,
      title: 'Coming Soon',
      summary: '',
      url: ''
    },
    // ... (other news items)
  ];

  return (
    <>
      <section className="content">
        {posts.length > 0 ? (
          posts.map(post => <PostDetails key={post.id} post={post} />)
        ) : (
          <p className="no-content-message">No content available. Check back soon!</p>
        )}
      </section>
      <aside className="sidebar">
        <NewsFeed newsFeed={newsFeed} />
        <Newsletter />
      </aside>
    </>
  );
};

export default HomePage;