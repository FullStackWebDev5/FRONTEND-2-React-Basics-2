import './App.css'
import RenderingList from './components/RenderingList'

function App() {

  return (
    <div>
      <RenderingList />
    </div>
  )
}

export default App


/*
  # Fragment:
    - A react component can only return a single parent JSX element
    - Whenever, multiple adjacent JSX elements are returned from a component, either group those under a single div or a react fragment
    - Syntax: <></>
*/