import { createBrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Admin />
  },
])

export { router }; 
