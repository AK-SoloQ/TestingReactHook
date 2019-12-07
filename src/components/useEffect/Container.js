import React, { useState } from 'react';
import ClassDisplayKey from './ClassDisplayKey'
import FunctionDisplayKey from './FunctionDisplayKey'

function Container() {
      const [visible, setVisible] = useState(true)
      const messageButton = visible ? 'Afficher' : 'Cacher'
      return (<div className='card card-body mt-4 text-center'>
            <button type="button" className="btn btn-warning" onClick={() => { setVisible(!visible) }}> {messageButton} </button>
            {visible && <FunctionDisplayKey />}
            {visible && <ClassDisplayKey></ClassDisplayKey>}
      </div>)
}

export default Container;