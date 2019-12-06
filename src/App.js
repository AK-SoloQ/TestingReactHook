import React from 'react';
import './App.css';
import ClassState from './components/ClassState'
import ClassCount from './components/ClassCount'
import FunctionState from './components/FunctionState'
import Todo from './components/Todo'
import FunctionCount from './components/FunctionCount'

function App() {
  return (
    <div className="container">
      <h1 className="text-center">useState Hooks</h1>
      <ClassState />
      <hr />
      <FunctionState />
      <hr />
      <Todo></Todo>
      <ClassCount></ClassCount>
      <FunctionCount></FunctionCount>
    </div>
  );
}

export default App;
