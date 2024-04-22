import { Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Coffee Store</h1>
      <Link to='/addCoffee'>
        <button className='btn'>go user page</button>
      </Link>
    </>
  )
}

export default App
