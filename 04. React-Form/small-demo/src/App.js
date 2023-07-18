import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  console.log(username)

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value)
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitHandler}>
          <div>
            <label
              htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id='username'
              onChange={usernameChangeHandler}
              value={username}
            />
          </div>
          <div>
            <button
              type='submit'
              id='button'
            >
              Submit
            </button>
          </div>
        </form>
      </header>
    </div>
  );



}

export default App;
