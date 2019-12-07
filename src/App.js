import React, { Fragment } from 'react';
import './App.css';
// The Use State Components
import ClassState from './components/useState/ClassState'
import ClassCount from './components/useEffect/ClassCount'
import FunctionState from './components/useState/FunctionState'
import Todo from './components/useState/Todo'

// The use effect Components 
import FunctionCount from './components/useEffect/FunctionCount'
import Container from './components/useEffect/Container'

// Bootstarp Elements
import { Tabs, Tab } from 'react-bootstrap';

// Main Function
function App() {
  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="useState" id="uncontrolled-tab-example">
        <Tab eventKey="useState" title="useState">
          <UseState></UseState>
        </Tab>
        <Tab eventKey="useEffect" title="useEffect">
          <UseEffect></UseEffect>
        </Tab>
        <Tab eventKey="other" title="other">
          Zone 3
        </Tab>
      </Tabs>




    </div>
  );
}
function UseState() {
  return (
    <Fragment>
      <h1 className="text-center">useState Hooks</h1>
      <ClassState />
      <hr />
      <FunctionState />
      <hr />
      <Todo></Todo>
    </Fragment>
  )
}

function UseEffect() {
  return (
    <Fragment>
      <h1 className="text-center">useEffect Hooks</h1>
      <ClassCount></ClassCount>
      <FunctionCount></FunctionCount>
      <Container></Container>
    </Fragment>
  )
}

export default App;
