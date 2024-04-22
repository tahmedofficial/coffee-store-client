import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards/CoffeeCards';

function App() {

  const coffees = useLoaderData();

  return (
    <>
      <h1 className='text-6xl text-purple-600'>Coffee Store{coffees.length}</h1>
      <Link to='/addCoffee'>
        <button className='btn'>go user page</button>
      </Link>
      <div className='md:grid grid-cols-2 gap-4 md:w-5/6 lg:w-4/6 mx-auto'>
        {
          coffees.map(coffee=><CoffeeCards key={coffee._id} coffee={coffee}></CoffeeCards>)
        }
      </div>
    </>
  )
}

export default App
