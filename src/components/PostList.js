import React from 'react';
import PostItem from './PostItem';
const PostList = ({ posts, action }) => {
  return Object.keys(posts).map(key => (
    <PostItem key={key} item={posts[key]} action={action} />
  ));
};

export default PostList;
