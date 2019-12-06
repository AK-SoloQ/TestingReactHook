import React, { useEffect, useState } from 'react';
function FunctionCount() {
      const [count, setCount] = useState(0)
      useEffect(() => {
            document.title = `Vous avez clique ${count}`
      })
      return (
            <div className='card card-body mt-5'>
                  <h3>The Count {count}</h3>
                  <button type='button' className='btn btn-danger' onClick={() => { setCount(count + 1) }}>Add +1</button>
            </div>
      )
}

export default FunctionCount;