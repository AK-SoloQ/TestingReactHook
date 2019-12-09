import React from 'react';

function Button({ btnColor, increment, children, handleClick, value }) {
      return (
            <>
                  <button type="button" className={`btn btn-primary btn-lg m-3 bg-${btnColor}`} onClick={() => handleClick(increment)}>{children} {value} %</button>
            </>
      )
}

export default Button;