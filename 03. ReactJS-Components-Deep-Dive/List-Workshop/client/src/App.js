import { useState, useEffect } from 'react';

import * as userServices from './services/userService'

import './App.css';
import { Footer } from './components/common/Footer';
import { Header } from './components/common/Header';
import { Search } from './components/search/Search';
import { UserList } from './components/user-list/UserList';



function App() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    userServices.getAll()
    .then(users => setUsers(users));
  }, []);

  console.log(users);

  return (
    <div>
      <Header />

      <main className="main">
        <section className="card users-container">

          <Search />
          <UserList users={users} />
        </section>
      </main>

      <Footer />

    </div>
  );
}

export default App;
