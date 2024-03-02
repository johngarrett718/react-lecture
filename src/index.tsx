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
import { BlogPostContainer } from './modules/blogPost'
import { Login } from './modules/login';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/blog',
    element: <BlogPostContainer />
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