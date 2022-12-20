import { useState } from 'react';

import PostList from './components/PostList';
import Mybutton from './components/UI/button/Mybutton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  const [title, setTitle] = useState('dssdsd');

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  };

  return (
    <div className="App">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type=""
          placeholder="Posts name "
        />
        <MyInput type="" placeholder="Post description" />
        <Mybutton onClick={addNewPost}>create post</Mybutton>
      </form>
      <PostList posts={posts} title="recieved post lists 1" />
    </div>
  );
}

export default App;
