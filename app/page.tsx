'use client'
import { useEffect, useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Posts from JSONPlaceholder</h1>
      <div>
        {posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ddd', borderRadius: '5px', marginBottom: '10px', padding: '10px', backgroundColor: '#f9f9f9' }}>
            <h2 style={{ margin: 0, fontSize: '1.2em' }}>{post.title}</h2>
            <p style={{ margin: '5px 0' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

