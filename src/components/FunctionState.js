import React, { useState } from 'react'
function FunctionState(props) {
      const [counter, setConter] = useState(0)

      return (
            <div className='float-none'>
                  <h2> Function state {counter}</h2>
                  <button type='button' className='btn btn-success' onClick={() => { setConter(prevConter => prevConter + 1) }}>Add One</button>
            </div>
      )
}

export default FunctionState;
