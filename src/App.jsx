import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards/CoffeeCards';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Coffee Store{coffees.length}</h1>
      <Link to='/addCoffee'>
        <button className='btn'>go user page</button>
      </Link>
      <Link to='/signUp'>
        <button className='btn'>Sign Up</button>
      </Link>
      <Link to='/signIn'>
        <button className='btn'>Sign In</button>
      </Link>
      <div className='md:grid grid-cols-2 gap-4 md:w-5/6 lg:w-4/6 mx-auto'>
        {
          coffees.map(coffee => <CoffeeCards
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCards>)
        }
      </div>
    </>
  )
}

export default App
