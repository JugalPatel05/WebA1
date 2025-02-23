import React, { useState } from "react";

function SubredditInput({ setSubreddit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubreddit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a subreddit"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SubredditInput;
