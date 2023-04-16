import { createBrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Erro from "./Pages/Erro";
import Private from "./Routes/Private";

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
    element: <Private> <Admin /> </Private>
  },
  {
    path: '*',
    element: <Erro />
  }
])

export { router }; 
