import { useState } from 'react'
import './App.css'

function App() {
  const [movies, setMovies] = useState([
    'The Matrix',
    'Man of Steel',
    'Lord of the Rings',
    'The Case for Christ',
  ]);

  const buttonClickHandler = () => {
    setMovies((oldMovies) => {
      // const newMovies = oldMovies.slice();
      const newMovies = [...oldMovies];
      newMovies[3] = 'Harry Poter';
      newMovies.push('Avengers');
      newMovies.shift();

      return newMovies;
    })
  }

  return (
    <>
      <h1>Movies</h1>
      {/* <ul>
          <li>{movies[0]}</li>
          <li>{movies[1]}</li>
          <li>{movies[2]}</li>
        </ul> */}

      <ul>
        {movies.map(movie => <li key={movie}>{movie}</li>)}
      </ul>
      <button onClick={buttonClickHandler}>Change</button>
    </>
  )
}

export default App
