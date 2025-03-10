import React from 'react'

const styles = {
  flexContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1em'
  },
  studentContainer: { 
    border: '1px solid white',
    padding: '1em',
    borderRadius: '1em',
    width: '10em'
  }
}

const RenderingList = () => {
  const students = [
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
    { name: 'Bob', age: 18 },
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 23 },
    { name: 'David', age: 21 },
    { name: 'Emily', age: 24 },
    { name: 'Frank', age: 26 },
    { name: 'Grace', age: 27 },
    { name: 'Henry', age: 28 },
    { name: 'Isabella', age: 29 },
    { name: 'Jack', age: 30 },
    { name: 'Karen', age: 31 },
    { name: 'Lisa', age: 32 },
    { name: 'Mary', age: 33 },
    { name: 'Nathan', age: 34 },
    { name: 'Olivia', age: 35 },
    { name: 'Peter', age: 36 },
    { name: 'Quinn', age: 37 },
    { name: 'Rose', age: 38 },
    { name: 'Samuel', age: 39 },
    { name: 'Tom', age: 40 },
    { name: 'Uma', age: 41 },
    { name: 'Victor', age: 42 },
  ]

  return (
    <>
      {/* <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li>
        ))}
      </ul> */}

      <div style={styles.flexContainer}>
        {students.map((student, index) => (
          <div key={index} style={styles.studentContainer}>
            <h1>{student.name}</h1>
            <p>Age: {student.age}</p>
            <button>+ Follow</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default RenderingList

/*
  # Rendering List:
    - Whenever there is a need to re-use a single JSX logic or a component multiple times
    - Syntax:
      {array.map((element, index) => (
        <h1>{element}</h1>  
      ))}
*/