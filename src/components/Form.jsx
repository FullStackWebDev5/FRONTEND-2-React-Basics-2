import { useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')

  return (
    <form>
      <h1>You have entered: {name}</h1>
      <input 
        type="text" 
        placeholder="Enter your name" 
        value={name}
        onInput={(e) => setName(e.target.value)}
      />
      <button type="button">Submit</button>
    </form>
  )
}

export default Form

/*
  # Controlled components:
    - HTML form has it's own data
    - In React, we have 'state' concept, which is used to re-render the component whenever state changes
    - Making states the 'single source of truth' is important, so that, at any given moment, we can depend upon the state information to determine the form values

    - Steps to make a form element controlled by react
      - Assign react's state as the value to the form element
      - Add an 'onChange'/'onInput' event handler to the form element that updates the state simultaneously whever the value changes
*/