import React, { Fragment, useState, useCallback } from 'react';
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

// Improt CallBack
import Button from './components/Callback/Button'
import Progress from './components/Callback/Progress'

// Import Memo
import ProfileMemo from './components/Memo/ProfileMemo'

// Accueil Redux 
import Accueil from './components/Accueil/Accueil'
import Post from './components/Accueil/Post'
// Bootstarp Elements
import { Tabs, Tab } from 'react-bootstrap';

// Add Router
import { BrowserRouter, Route } from 'react-router-dom'

// Import Menu 
import Menu from './components/Menu/Menu'
// Main Function
function App() {
  const [user, setUser] = useState({
    name: 'Lisa simpsion',
    age: 8
  })
  const [countOne, setCountOne] = useState({ value: 0, btnColor: 'success', increment: 25 })
  const [countTwo, setCountTwo] = useState({ value: 0, btnColor: 'danger', increment: 20 })

  const incrementCountOne = useCallback((val) => {
    console.log('val', val)
    countOne.value < 100 && setCountOne({ ...countOne, value: countOne.value + val })
  }, [countOne])
  const incrementCountTwo = useCallback((val) => {
    countTwo.value < 100 && setCountTwo({ ...countTwo, value: countTwo.value + val })
  }, [countTwo])
  return (
    <div className="container mt-4">
      <BrowserRouter>
        <Menu />
        <Route path='/post/:post_id' component={Post}></Route>
        <Route exact path='/' component={Accueil} ></Route>
        <Route path='/useState' component={UseState}></Route>
        <Route path='/useEffect' component={UseEffect}></Route>
        <Route path='/useReduce' component={Count}></Route>
        <Route path='/useMemo' component={ProfileMemo}></Route>
        <Route path='/useCallback'>
          <Progress {...countOne}></Progress>
          <Progress {...countTwo}></Progress>
          <Button handleClick={incrementCountOne} {...countOne}>Count 1</Button>
          <Button handleClick={incrementCountTwo} {...countTwo}>Count 2</Button>
        </Route>
        <Route path='/context'>
          <UserContext.Provider value={user}>
            <ColorContext.Provider value={'red'}>
              <Profile />
            </ColorContext.Provider>
          </UserContext.Provider>
        </Route>
        <Route path='/tabs'>
          <Tabs defaultActiveKey="Memo" id="uncontrolled-tab-example">
            <Tab eventKey='Memo2' title="Memo2">
              <h1>Bonjour </h1>
            </Tab>
            <Tab eventKey='Memo' title="Memo">
              <h1>HEll0 </h1>
            </Tab>
          </Tabs>
        </Route>
      </BrowserRouter>
    </div >
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
