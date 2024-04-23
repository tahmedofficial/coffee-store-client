import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards/CoffeeCards';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Header></Header>
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
