import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "./layouts/MainLayout";

import Home from './routes/Home'
import Credit from './routes/Credit'
import MovieDetail from './routes/MovieDetail'
import CreditList from './routes/CreditList'


import './index.css'

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <MovieDetail />,
        path: "/movie/:id",
      },
      {
        element: <Credit />,
        path: "/person/:id",
      },
      {
        element: <CreditList />,
        path: "/people/"
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
