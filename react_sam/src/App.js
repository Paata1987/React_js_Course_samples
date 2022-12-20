import { useRef, useState } from 'react';
import Postform from './components/Postform';

import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'descdiption' },
    { id: 2, title: 'Javascript angular', body: 'descdiption' },
    { id: 4, title: 'Jav Vue js', body: 'descdiption' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedPosts = [...posts].sort((a, b) =>
    a[selectedSort].localeCompare(b[selectedSort])
  );

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts();
    console.log(sort);
  };

  return (
    <div className="App">
      <Postform create={createPost} />
      <hr style={{ margin: '25px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search ..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPost}
          defaultValue="sort"
          options={[
            { value: 'title', name: 'By name' },
            { value: 'body', name: 'By description' },
          ]}
        />
      </div>
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
