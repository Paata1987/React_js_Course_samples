import { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import Postform from './components/Postform';

import PostList from './components/PostList';
import Mybutton from './components/UI/button/Mybutton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/myModal/MyModal';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: ' Javascript', body: 'descdiption' },
    { id: 2, title: ' Javascript angular', body: 'descdiption' },
    { id: 4, title: ' Jav Vue js', body: 'descdiption' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  /*  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSort, setSelectedSort] = useState(''); */

  /*   function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  } */

  /*   const sortedPosts = getSortedPosts(); */
  /*  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    }
    return posts;
  }, [selectedSort, posts]); */

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((p) =>
      p.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  /*  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]); */

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  /*  const sortPosts = (sort) => {
    setSelectedSort(sort);

    console.log(sort);
  }; */

  return (
    <div className="App">
      <Mybutton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        create post
      </Mybutton>
      <MyModal visible={modal} setVisible={setModal}>
        <Postform create={createPost} />
      </MyModal>

      <hr style={{ margin: '25px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="recieved post lists 1"
      />
    </div>
  );
}

export default App;
