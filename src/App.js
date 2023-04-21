import { createBrowserRouter } from "react-router-dom";

import Home from './Pages/Home'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Erro from "./Pages/Erro";
import Private from "./Routes/Private";
import Network from "./Pages/Networks";

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
    path: "/admin/social",
    element: <Private> <Network /> </Private>
  },
  {
    path: '*',
    element: <Erro />
  }
])

export { router }; 
