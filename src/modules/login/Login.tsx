/* eslint-disable jsx-a11y/alt-text */
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom'
import airplaneSrc from './airplane.jpeg'

export const Login = () => {
  const navigate = useNavigate()
  return (
    <Paper style={{ textAlign: 'center', padding:'20px'}}>
      <img src={airplaneSrc} />
      <div style={{marginBottom: '10px'}}>
        Login Page
      </div>
      <TextField label='Username' />
      <TextField label='Password' />
      <div>
        <Button
          onClick={() => navigate('/blog')}
        >Login</Button>
      </div>
    </Paper>
    
  )
}