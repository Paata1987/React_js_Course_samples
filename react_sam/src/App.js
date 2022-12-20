import { useState } from 'react';

import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: 'Python', body: 'descdiption' },
    { id: 2, title: 'c# angular', body: 'descdiption' },

    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title="recieved post lists 1" />
      <PostList posts={posts2} title="recieved post python 2" />
    </div>
  );
}

export default App;
