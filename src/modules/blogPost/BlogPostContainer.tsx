import { BlogPost } from './BlogPost'

export const BlogPostContainer = () => {
  const posts = [
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date()
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date()
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date()
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date()
    }
  ]

  return (
    <>
      {
        posts.map((post, index) => <BlogPost key={index} {...post} />)
      }
    </>
  )
}