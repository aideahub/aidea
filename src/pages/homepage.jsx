import React from 'react';
import Post from '../components/post';
import NewsFeed from '../components/newsfeed';
import Newsletter from '../components/newsletterSubscription';
import IntroductionToGNNPost from './posts/gnn/introGNN';

const HomePage = () => {
  const posts = [
    IntroductionToGNNPost
  ];

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
          posts.map(post => <Post key={post.id} post={post} />)
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