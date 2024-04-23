import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users/Users.jsx';
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-umber-five.vercel.app/coffee")
  },
  {
    path: "/addCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffee-store-server-umber-five.vercel.app/coffee/${params.id}`)
  },
  {
    path: `/coffeeDetails/:id`,
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`https://coffee-store-server-umber-five.vercel.app/coffee/${params.id}`)
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>
  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>
  },
  {
    path: "/user",
    element: <Users></Users>,
    loader: () => fetch("https://coffee-store-server-umber-five.vercel.app/user")
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
