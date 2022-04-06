import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search'
import { useState } from 'react';

const  UNSPLASH_KEY= process.env.REACT_APP_UNSPLASH_API;

function App() {
  const [word, setWord ] = useState('');

  const onHandleSubmit= (e) => {
    e.preventDefault();
    console.log(word);

    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res)=> res.json())
      .then((data) => {
        console.log(data)
      })
      .catch((err) => console.log(err))

      setWord('')

  }

  return (
    <div className="App">
      <Header  title='Images Gallery'/>
      <Search onSubmit={onHandleSubmit} word={word} setWord={setWord} />
    </div>
  );
}

export default App;
