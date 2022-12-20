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

  return (
    <div className="App">
      <Postform create={createPost} />
      <PostList posts={posts} title="recieved post lists 1" />
    </div>
  );
}

export default App;
