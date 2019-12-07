import React, { useEffect, useState } from 'react';
function FunctionCount() {
      const [count, setCount] = useState(0)
      const [name, setName] = useState('')
      useEffect(() => {
            console.log('mise a jour du titre avec useEffect')
            document.title = `Vous avez clique ${count}`
      }, [count])
      //if the array is empty === componentDidMount
      // if the array with params that called only on params is updated
      return (
            <div className='card card-body mt-5'>
                  <h3>The Count {count}</h3>
                  <input type='text' value={name} className='form-control' onChange={e => setName(e.target.value)}></input>
                  <button type='button' className='btn btn-danger' onClick={() => { setCount(count + 1) }}>Add +1</button>
            </div >
      )
}

export default FunctionCount;