/* eslint-disable jsx-a11y/alt-text */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'
import airplaneSrc from './airplane.jpeg'

export const AboutMe = () => {
  return (
    <Paper style={{ textAlign: 'center', padding:'20px'}}>
      <div style={{marginBottom: '10px'}}>
        John Garrett
      </div>
      <img style={{width: '400px'}} src={airplaneSrc} />
      <div style={{marginBottom: '10px'}}>
        Login Page
      </div>

    </Paper>
    
  )
}