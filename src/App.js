import React from 'react';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <div>
          <TodoList/>
        </div>
      </main>
    </div>
  );
}

export default App;
