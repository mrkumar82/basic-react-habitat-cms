import React from 'react'

const index = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h2>This is sample component from json data</h2>
      <ul>
        {data &&
          data.map((items) => (
            <li key={items.id}>
              <h2>{items.title}</h2> <p>{items.body}</p>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default index
