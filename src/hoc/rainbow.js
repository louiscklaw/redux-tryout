import React from 'react'

const Rainbow = (WrappedComponent) => {
  const colors = ['red', 'pink', 'orange', 'yellow', 'green', 'blue']
  const randomColor = colors[Math.floor(Math.random()*5)]
  const className = randomColor+'-text'

  return (props) => {
    console.log(props)
    return (
      <div className={className}>
        <WrappedComponent {...props}/>
      </div>
    )
  }
}

export default Rainbow