import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Pets } from './modules/pets'
import { AboutMe } from './modules/aboutMe';
import { Root } from './App'



const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <AboutMe />
        },
        {
          path: '/pets',
          element: <Pets />
        }
      ]
    }
  ])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

createRoot(document.getElementById('root') as Element).render(<App />)