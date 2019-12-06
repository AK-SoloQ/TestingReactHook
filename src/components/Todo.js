import React, { useState } from 'react';
import AddTodo from './AddTodo'
import uuid from 'uuid'
function Todo(props) {
      const [todos, setTodos] = useState([
            { id: 1, name: 'Acheter du lait' },
            { id: 2, name: 'Acheter du pain' }
      ])
      const [warning, setWarning] = useState(false)

      const addNewTodo = (newTodo) => {
            if (newTodo) {
                  setTodos([
                        ...todos, { id: uuid(), name: newTodo }
                  ])
                  setWarning(false)
            } else {
                  setWarning(true)
            }

      }
      return (

            < div >
                  {warning && (<div class="alert alert-danger" role="alert"> Attention lors de l'ajoute d'une action  !</div>)}
                  <h1 className='text-center'>To do, {todos.length}</h1>
                  <ul className='list-group'>
                        {
                              todos.map(todo => <li className='list-group-item' key={todo.id}>{todo.name}</li>)
                        }
                  </ul>

                  <AddTodo addNewTodo={addNewTodo}></AddTodo>
            </div >
      )
}

export default Todo;