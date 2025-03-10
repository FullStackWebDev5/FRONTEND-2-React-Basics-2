import { useState } from 'react'

const State = () => {
  let [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const increment3 = () => {
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment3}>Increment 3</button>
    </div>
  )
}

export default State

/*
  # State
    - Data of the component
    - Before React 16.8.0 version, states could only be created inside class components
      - In React 16.8.0 version, 'Hooks' (special functions) were introduced. With 'useState' hook, now states could also be created inside functional components
    - Syntax:
      - Declaration:
        - const [state, setState] = useState(defaultValue)
        - Examples:
          - const [name, setName] = useState('')
          - const [isGraduated, setIsGraduated] = useState(false)
          - const [hobbies, setHobbies] = useState([])
          - const [address, setAddress] = useState({})
      - Update state
        - setState(updatedValue)
    - setState is asynchronous in nature
      - For scenarios where multiple setState methods need to be used one after another, an alternative syntax can be used, which has access to the previous updated state
      - Syntax: setState((prevState) => prevState + 1)


    # Additional points related to props and states
      - A component will re-render whenever the state or prop of the component changes
        - If a simple variable being used in the component changes, the component will not re-render
        - A component will re-render on a state value change, only if it is done using the setState method
          - No direct state updates should be done in React components
      - Render: Process of converting JSX and adding it to the DOM (HTML)

    # Event Handling
      - Difference from event handling in HTML
        - Event handlers need to specified in camelCase
          - 'onClick' instead of onclick
        - {} instead of "" because function is a JS expression
        - Pass function as a reference instead of function call
          - {handleClick} instead of {handleClick()}
          - If there is an argument to be passed
            - {() => handleClick()}

      - Syntax:
        const handleClick = () => {
          // Code for handling click event  
        }
        <button onClick={handleClick}>Click</button>
*/