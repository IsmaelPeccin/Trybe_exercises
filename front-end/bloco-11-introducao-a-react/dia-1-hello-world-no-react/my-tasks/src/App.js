import './App.css';
import React from 'react';


const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const myTasks = ['acordar', 'tomar café', 'almoçar', 'estudar'];

class App extends React.Component {
  render () {
    return (
      <ul>{myTasks.map((myTask) => Task(myTask)) }</ul>
    );
  }
}

export default App;
