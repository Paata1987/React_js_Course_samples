import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = (props) => {
  const { posts, title, remove } = props;

  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Posts Not Found!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title} </h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition classNames="post" key={post.id} timeout={500}>
            <PostItem remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
