import React from 'react';

const PostItem = ({ item, action }) => {
  const { title, body, id } = item;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <hr />
        <div className="card-text">{body}</div>
      </div>
      <button onClick={() => action(id)} className="btn btn-danger">
        Remove Post
      </button>
    </div>
  );
};

export default PostItem;
