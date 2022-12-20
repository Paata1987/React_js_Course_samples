import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: 'Javascript', body: 'descdiption' }} />
      <PostItem post={{ id: 3, title: 'Javascript', body: 'descdiption' }} />
      <PostItem post={{ id: 4, title: 'Javascript', body: 'descdiption' }} />
      <PostItem post={{ id: 5, title: 'Javascript', body: 'descdiption' }} />
      <PostItem post={{ id: 8, title: 'Javascript', body: 'descdiption' }} />
    </div>
  );
}

export default App;
