import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import UpdateCoffee from './components/UpdateCoffee/UpdateCoffee.jsx';
import AddCoffee from './components/AddCoffee/AddCoffee.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users/Users.jsx';
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails.jsx';
import Users2 from './components/Users2/Users2.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/coffee")
  },
  {
    path: "/addCoffee",
    element: <PrivateRoute><AddCoffee></AddCoffee></PrivateRoute>
  },
  {
    path: "/updateCoffee/:id",
    element: <PrivateRoute><UpdateCoffee></UpdateCoffee></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: `/coffeeDetails/:id`,
    element: <CoffeeDetails></CoffeeDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
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
    loader: () => fetch("http://localhost:5000/user")
  },
  {
    path: "/users2",
    element: <Users2></Users2>
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
