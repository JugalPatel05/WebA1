import React, { useState, useEffect } from "react";
import axios from "axios";

function PostList({ subreddit, addFavoritePost }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await axios.get(`https://www.reddit.com/r/${subreddit}/hot.json`);
        setPosts(result.data.data.children.slice(0, 10)); // Get top 10 posts
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (subreddit) {
      fetchPosts();
    }
  }, [subreddit]);

  return (
    <div>
      <h2>Top 10 Posts from r/{subreddit}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.data.id}>
            <h3>{post.data.title}</h3>
            <p>Score: {post.data.score}</p>
            <a href={`https://www.reddit.com${post.data.permalink}`} target="_blank" rel="noopener noreferrer">
              Comments
            </a>
            <button onClick={() => addFavoritePost(post.data.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
