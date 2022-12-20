import { useState } from 'react';

import PostList from './components/PostList';
import Mybutton from './components/UI/button/Mybutton';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  return (
    <div className="App">
      <form>
        <input type="" placeholder="Posts name " />
        <input type="" placeholder="Post description" />
        <Mybutton disabled>create post</Mybutton>
      </form>
      <PostList posts={posts} title="recieved post lists 1" />
    </div>
  );
}

export default App;
