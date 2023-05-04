import React from 'react';

function RepoCard(props) {
  return (
    <div >
      <img src={props.repo.avatar_url} alt={props.repo.name} />
      <div >
        <h3>{props.repo.name}</h3>
        <p>{props.repo.description}</p>
        <ul>
          <li>Stars: {props.repo.stargazers_count}</li>
          <li>Language: {props.repo.language}</li>
        </ul>
      </div>
    </div>
  );
}

export default RepoCard;