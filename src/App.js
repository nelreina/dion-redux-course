import React, { Component } from 'react';
import PostList from './components/PostList';
import { connect } from 'react-redux';
import { deletePost, addPost, fetchPost } from './store/reducers/posts';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchPost();
  }
  deletePost = id => {
    this.props.deletePost(id);
  };
  render() {
    const { posts, appTitle } = this.props;
    return (
      <div className="container">
        <h3>{appTitle}</h3>
        <form onSubmit={this.addPost} />
        <PostList posts={posts} action={this.deletePost} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  posts: state.posts,
  appTitle: state.appTitle
});
const mapActionToProps = { deletePost, addPost, fetchPost };
export default connect(mapStateToProps, mapActionToProps)(App);
