import React, { useReducer } from 'react';
import Emoji from 'a11y-react-emoji'

const initialState = {
      countOne: 0,
      countTwo: 0
};
const reducer = (state, action) => {
      switch (action.type) {
            case 'inrement2':
                  return { ...state, countTwo: state.countTwo + action.value };
            case 'decrement2':
                  return { ...state, countTwo: state.countTwo - action.value };
            case 'inrement':
                  return { ...state, countOne: state.countOne + action.value };
            case 'decrement':
                  return { ...state, countOne: state.countOne - action.value };
            case 'rest':
                  return initialState
            default:
                  return state
      }

}
function Count() {
      const [count, dispatch] = useReducer(reducer, initialState)
      return (
            <div className='row text-center mt-5'>
                  <div className='col-6 card card-body'>
                        <p className='h2'>Count 1</p>
                        <h1>{count.countOne}</h1>
                        <button className='btn btn-success m-3 col' onClick={() => { dispatch({ type: 'inrement', value: 1 }) }}>+</button>
                        <button className='btn btn-danger m-3 col' onClick={() => { dispatch({ type: 'decrement', value: 1 }) }}>-</button>
                  </div>
                  <div className='col-6 card card-body'>
                        <p className='h2'>Count 2</p>
                        <h1>{count.countTwo}</h1>
                        <button className='btn btn-success m-3' onClick={() => { dispatch({ type: 'inrement2', value: 20 }) }}>+</button>
                        <button className='btn btn-danger m-3' onClick={() => { dispatch({ type: 'decrement2', value: 20 }) }}>-</button>
                  </div>
                  <div className='col-12'>
                        <button className='btn btn-warning btn-lg btn-block mt-5 bt-3' onClick={() => { dispatch({ type: 'rest' }) }}> <Emoji symbol="🔃" label="reload" /> </button>
                  </div>

            </div>
      )
}

export default Count; 