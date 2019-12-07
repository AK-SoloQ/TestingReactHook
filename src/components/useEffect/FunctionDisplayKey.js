import React, { useState, useEffect } from 'react';

function FunctionDisplayKey() {
      const [keyCode, setKeyCode] = useState(null)
      const handlerKeyUp = e => {
            setKeyCode(e.code)
      }
      useEffect(() => {
            document.addEventListener('keyup', handlerKeyUp)
            return () => {
                  document.removeEventListener('keyup', handlerKeyUp)
            }
      }, [])

      return (<div className="card card-body">
            <h1 className="text-center">
                  {keyCode}
            </h1>
      </div>)

}

export default FunctionDisplayKey;