import React from 'react';

export default function ReviewItem(props) {
  const { id, reviewer, stars, message, onEdit } = props;
  return (
    <div>
      <h2>{reviewer}</h2>
      <div>Stars: {stars}</div>
      <blockquote>
        <p>{message}</p>
      </blockquote>
      <button
        onClick={() => onEdit(id)}
      >
        Edit
      </button>
    </div>
  );
}
