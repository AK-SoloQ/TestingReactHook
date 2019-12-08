import React, { useReducer } from 'react';
const initialState = 0;
const reducer = (state, action) => {
      switch (action) {
            case 'inrement':
                  return state + 1;
            case 'decrement':
                  return state - 1;
            case 'rest':
                  return initialState
            default:
                  return state
      }

}
function Count() {
      const [count, dispatch] = useReducer(reducer, initialState)
      return (
            <div className='text-center mt-5'>
                  <h1>{count}</h1>
                  <button className='btn btn-success m-3' onClick={() => { dispatch('inrement') }}>+</button>
                  <button className='btn btn-danger m-3' onClick={() => { dispatch('decrement') }}>-</button>
                  <br></br>
                  <button className='btn btn-warning' onClick={() => { dispatch('rest') }}>&#128540; </button>
            </div>
      )
}

export default Count; 