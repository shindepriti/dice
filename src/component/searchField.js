import React, { useState } from 'react';
import RepoCard from './repoCard';

function SearchField(props) {
    const [searchQuery, setSearchQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [sortField, setSortField] = useState('stars');
  function handleSearch(event) {
    event.preventDefault();

    const authToken = "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";

    fetch(`https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortField}`, {
      headers: {
        Authorization: `token ${authToken}`
      }
    })
      .then(response => response.json())
      .then(data => setRepos(data.items));
  }
  return (
    <div>
    <form onSubmit={handleSearch}>
      <label htmlFor="searchText">Search:</label>
      <input type="text" id="searchText" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <label htmlFor="sortField">Sort by:</label>
      <select id="sortField"  onChange={event => setSortField(event.target.value)}>
        <option value="stars">Stars</option>
        <option value="watchers">Watchers</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created">Created</option>
        <option value="updated">Updated</option>
      </select>
      <button type="submit">Search</button>
    </form>
    <div >
    {repos.map(repo => (
      <RepoCard key={repo.id} repo={repo} />
    ))}
  </div>
  </div>
  );
}

export default SearchField;
