import React from 'react';

function Progress({ value, btnColor }) {
      const progress = { width: `${value}%` }
      return (
            <>
                  <p className='h2'>{value}%</p>
                  <div className='progress'>
                        <div className={`progress-bar progress-bar-striped' role='progressbar bg-${btnColor}`}
                              style={progress}></div>
                  </div>
            </>
      )
}

export default Progress;