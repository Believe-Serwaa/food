import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ProductsPage from './pages/ProductsPage';
import HeroSection from './components/HeroSection';
import Homepage from './pages/Homepage';
import SignupForm from './pages/SignupForm';
import LoginForm from './pages/LoginForm';

function App() {
  const router = createBrowserRouter ([
{
  path:"/",
  element:<Homepage/>,
},

    {
      path: "/products",
      element: <ProductsPage/>,
    },

    {
      path:"/hero",
      element: <HeroSection/>,
    },

     {
       path:"/signup",
       element: <SignupForm/>,
     },

     {
      path:"/login",
      element: <LoginForm/>,
     },

  ])

  return <RouterProvider router={router} />;
}

export default App;
