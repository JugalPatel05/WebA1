import React, { useState, useEffect } from "react";
import SubredditInput from "./components/SubredditInput";
import PostList from "./components/PostList";
import Favorites from "./components/Favorites";
import './App.css';

function App() {
  const [subreddit, setSubreddit] = useState("");
  const [favoritePosts, setFavoritePosts] = useState(() => {
    const storedFavorites = localStorage.getItem("favoritePosts");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addFavoritePost = (postId) => {
    if (!favoritePosts.includes(postId)) {
      const newFavorites = [...favoritePosts, postId];
      setFavoritePosts(newFavorites);
      localStorage.setItem("favoritePosts", JSON.stringify(newFavorites));
    }
  };

  const removeFavoritePost = (postId) => {
    const newFavorites = favoritePosts.filter(id => id !== postId);
    setFavoritePosts(newFavorites);
    localStorage.setItem("favoritePosts", JSON.stringify(newFavorites));
  };

  return (
    <div className="App">
      <h1>Reddit Favorites</h1>
      <SubredditInput setSubreddit={setSubreddit} />
      {subreddit && (
        <PostList subreddit={subreddit} addFavoritePost={addFavoritePost} />
      )}
      <Favorites favoritePosts={favoritePosts} removeFavoritePost={removeFavoritePost} />
    </div>
  );
}

export default App;
