import { createBrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Erro from "./Pages/Erro";

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
    path: "/admin",
    element: <Admin />
  },
  {
    path: '*',
    element: <Erro />
  }
])

export { router }; 
