import { PetDetail } from './PetDetail'
import peppi from '../images/peppi.jpg'
import fredMitzi from '../images/fredMitzi.jpg'
import jet from '../images/jet.jpeg'

export const Pets = () => {
  const pets = [
    {
      title: 'Peppi',
      description: 'Peppi was a toy poodle. Peppi made it to 18 years of age before passing away. ' + 
      'She had a huge goiter, no teeth, ' +
      'smelled like she was rotting from the inside, barked constantly, but was our beautiful queen.',
      imgSrc: peppi
    },
    {
      title: 'Fred & Mitzi',
      description: 'We adopted Fred when he was 10 years old, and had 4 amazing years with him. ' +
      'A cat took his eye in a fight when he was a puppy, but he never let it get him down. ' + 
      'Mitzi is currently 10 years old. She has been a part of our family for 6 years. ' +
      'Mitzi was rescued from a puppy mill after being abused by her owners. Now she is one ' +
      'fiesty old lady!',
      imgSrc: fredMitzi
    },
    {
      title: 'Jet',
      description: 'Jet is the newest addition to our family. He recently turned one and has ' +
      'tons of energy! His favorite things are running, playing, getting petted, and chewing anything ' +
      'made of plastic, cloth, or paper. Nothing is safe!!',
      imgSrc: jet
    },
  ]

  return (
    <>
      {
        pets.map((pet, index) => <PetDetail key={index} {...pet} />)
      }
    </>
  )
}