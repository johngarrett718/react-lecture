/* eslint-disable jsx-a11y/alt-text */

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Pets.css'

export interface PetProps {
   /**
   * The title of the Blog Post
   */
  title: string
  description: string
  imgSrc: string
}

export const PetDetail = ({
  title = 'Some Title',
  description = 'Some Description',
  imgSrc

}: PetProps) => {
  return (
    <Paper className='center'>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ flex: '1'}}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ flex: '1'}}>
          <Typography variant="h4" gutterBottom>
            <img src={imgSrc} />
          </Typography>
        </span>
      </div>
      <div style={{ marginTop: '10px'}}>
        <Typography variant="body1" gutterBottom>
          <div style={{ width: '400px' }}>{description}</div>
        </Typography>
      </div>
    </Paper>
  )
}