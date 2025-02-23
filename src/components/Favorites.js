import React from "react";

function Favorites({ favoritePosts, removeFavoritePost }) {
  return (
    <div>
      <h2>Your Favorite Posts</h2>
      <ul>
        {favoritePosts.map((postId) => (
          <li key={postId}>
            <p>Post ID: {postId}</p>
            <button onClick={() => removeFavoritePost(postId)}>Remove from Favorites</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
