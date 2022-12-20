import { useRef, useState } from 'react';
import Postform from './components/Postform';

import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Postform create={createPost} />
      {posts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={posts}
          title="recieved post lists 1"
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>There is no post</h1>
      )}
    </div>
  );
}

export default App;
