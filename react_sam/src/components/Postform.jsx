import React from 'react';
import { useState } from 'react';
import Mybutton from '../components/UI/button/Mybutton';
import MyInput from '../components/UI/input/MyInput';
import '../styles/App.css';

const Postform = (props) => {
  const { create } = props;
  const [post, setPost] = useState({ title: '', body: '' });
  //const [title, setTitle] = useState('');
  //const [body, setBody] = useState('');
  //const bodyInputRef = useRef();
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    setPost({ title: '', body: '' });
    create(newPost);
    console.log(newPost);
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type=""
        placeholder="Posts name "
      />

      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type=""
        placeholder="Post description"
      />
      <Mybutton onClick={addNewPost}>create post</Mybutton>
    </form>
  );
};

export default Postform;
