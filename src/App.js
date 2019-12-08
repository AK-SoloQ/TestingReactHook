import React, { Fragment, useState } from 'react';
import './App.css';
// The Use State Components
import ClassState from './components/useState/ClassState'
import ClassCount from './components/useEffect/ClassCount'
import FunctionState from './components/useState/FunctionState'
import Todo from './components/useState/Todo'

// The use effect Components 
import FunctionCount from './components/useEffect/FunctionCount'
import Container from './components/useEffect/Container'

// Import Context
import { UserContext, ColorContext } from './components/Contexte/MyContext'
import Profile from './components/Contexte/Profile'

// Import Reducer
import Count from './components/Reducer/Count'

// Bootstarp Elements
import { Tabs, Tab } from 'react-bootstrap';

// Main Function
function App() {
  const [user, setUser] = useState({
    name: 'Lisa simpsion',
    age: 8
  })
  return (
    <div className="container mt-4">
      <Tabs defaultActiveKey="Reducer" id="uncontrolled-tab-example">
        <Tab eventKey="useState" title="useState">
          <UseState></UseState>
        </Tab>
        <Tab eventKey="useEffect" title="useEffect">
          <UseEffect></UseEffect>
        </Tab>
        <Tab eventKey="Context" title="Context">
          <UserContext.Provider value={user}>
            <ColorContext.Provider value={'red'}>
              <Profile />
            </ColorContext.Provider>
          </UserContext.Provider>
        </Tab>
        <Tab eventKey="Reducer" title="Reducer">
          <Count />
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
