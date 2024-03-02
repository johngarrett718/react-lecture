import { PetDetail } from './PetDetail'

export const Pets = () => {
  const posts = [
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date(),
      verified: true,
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date(),
      verified: true,
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date(),
      verified: false,
    },
    {
      title: 'Flight to Chicago',
      body: 'I got arrested by security',
      date: new Date(),
      verified: false,
    }
  ]

  return (
    <>
      {
        posts.map((post, index) => <PetDetail key={index} {...post} />)
      }
    </>
  )
}