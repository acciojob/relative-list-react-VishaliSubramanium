import React from 'react'

const App = () => {
  const relatives = ["Relative A", "Relative B", "Relative C"];

  return (
    <div id="main">
      <ol id="relativeList" key="relativeList">
        {relatives.map((relative, index) => (
          <li 
            id={`relativeListItem${index + 1}`} 
            key={`relativeListItem${index + 1}`}
          >
            {relative}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default App
