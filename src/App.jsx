import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCards from './components/CoffeeCards/CoffeeCards';
import { useState } from 'react';
import Header from './components/Header/Header';
import bgImg from "../src/assets/images/more/1.png";
import titleImg from "../src/assets/images/more/Group 9.png";
import Banner from './components/Banner/Banner';


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="w-full absolute">
        <img className="w-full" src={bgImg} alt="" />
      </div>

      <div className='relative flex flex-col items-center mt-24'>
        <h3 className='text-lg text-primary_text font-medium mb-4'>--- Sip & Savor ---</h3>
        <img src={titleImg} alt="Photo" />
      </div>

      <div className='md:grid grid-cols-2 gap-4 md:w-5/6 lg:w-4/6 mx-auto mt-16 relative'>
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
