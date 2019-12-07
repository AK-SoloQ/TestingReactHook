import React, { useState } from 'react';
function AddTodo({ addNewTodo }) {
      const [todo, setTodo] = useState('')
      const handleTodo = (e) => {
            e.preventDefault()
            //if (todo) {
            addNewTodo(todo)
            setTodo('')
            //}
      }
      return (<form className='card card-body mt-5' onSubmit={handleTodo}>
            <div className='form-group'>
                  <label>Ajouter Todo</label>
                  <input type="text" className="form-control" value={todo} onChange={(e) => { setTodo(e.target.value) }}></input>
                  <input type="submit" className="btn btn-success mt-4" ></input>
            </div>
      </form>)
}

export default AddTodo;