import { useEffect, useState } from 'react';

import TaskList from './commponents/TaskList';

import './App.css';
import styles from './App.module.css';
import CreateTask from './commponents/CreateTask';

function App() {
  const [tasks, setTasts] = useState([
    { _id: 1, title: 'first' },
    { _id: 2, title: 'second' },
    { _id: 3, title: 'third' },

  ]);

  const taskCreateHandler = (newTask) => {

    setTasts(state => [...state, 
      {
        _id: state[state.length -1 ]?._id + 1 || 1,
        title: newTask
      }
      
    ]);
  };

  const taskDeleteHandler = (taskId) => {
    setTasts(state => state.filter(x => x._id != taskId))
  };

  return (
    <div className={styles['site-wrapper']}>
      <div>
        <header>TODO App</header>
      </div>

      <main>
        <TaskList tasks={tasks}  taskDeleteHandler={taskDeleteHandler}/>
        <CreateTask taskCreateHandler={taskCreateHandler} />
      </main>
    </div>

  );
}

export default App;
