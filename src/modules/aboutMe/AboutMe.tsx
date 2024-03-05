/* eslint-disable jsx-a11y/alt-text */

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import garrettBoys from '../images/garrettBoys.jpg'
import './AboutMe.css'


export const AboutMe = () => {
  return (
    <Paper className='center'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ flex: '1'}}>
          <Typography variant="h4" gutterBottom>
            John Garrett
          </Typography>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ flex: '1'}}>
          <Typography variant="h4" gutterBottom>
            <img src={garrettBoys} />
          </Typography>
        </span>
      </div>
      <div style={{ marginTop: '10px'}}>
        <Typography variant="body1" gutterBottom>
          <div style={{ width: '400px' }}>
            Hello everyone!! My name is John Garrett. I am a 46 year old college student, seeking a degree in computer science.
            I have been enrolled at UMSL since 2020. The last time I took a college cousrse before then was in 1999.
            A lot has changed! I currently work as a software engineer for a local healthcare technology company.
            I have been with them for 5 years, and they are paying for me to finish my degree. I couldn't be more grateful!!
            My two boys George and Jack are my pride and joy. They are a very active 6 and 4. I coach George's soccer and basketball team,
            and will do the same for Jack when he starts in the fall. I have been married to my beautful wife Natalie for 7 years,
            and am looking forward to see what the future holds. I just started guitar lessons, after a couple years of trying to teach myself. 
            It is very challenging and fun. The hardest part is constantly talking myself out of buying new guitars. My wife and I love dogs!
            We have adopted 3 senior dogs and a puppy. You can learn more about them by clicking 'PETS' above.
          </div>
        </Typography>
      </div>
    </Paper>
  )
}