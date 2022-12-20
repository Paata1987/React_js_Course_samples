import { useRef, useState } from 'react';

import PostList from './components/PostList';
import Mybutton from './components/UI/button/Mybutton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  //const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
    console.log(newPost);
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

        <MyInput
          value={body}
          onChange={(e) => setBody(e.target.value)}
          type=""
          placeholder="Post description"
        />
        <Mybutton onClick={addNewPost}>create post</Mybutton>
      </form>
      <PostList posts={posts} title="recieved post lists 1" />
    </div>
  );
}

export default App;
