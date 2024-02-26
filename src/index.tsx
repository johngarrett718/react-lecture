import React from 'react'
import { createRoot } from 'react-dom/client'
import { BlogPostContainer } from './modules/blogPost/'

const App = () => {
  return (
    <>
      <BlogPostContainer />
    </>
  )
}

createRoot(document.getElementById('root') as Element).render(<App />)