import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './BlogPost.css'

export interface BlogPostProps {
   /**
   * The title of the Blog Post
   */
  title: string
  body: string
  date: Date
  verified?: boolean
}

export const BlogPostPretty = ({
  title = 'Some Title',
  body,
  date, 
  verified
}: BlogPostProps) => {
  const backgroundColor = verified ? 'lightBlue' : undefined
  return (
    <Paper className='blogPostPretty' style={{ backgroundColor }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ flex: '1'}}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
        </span>
        <span>
          <Typography variant="subtitle1" gutterBottom>
            {date.toLocaleDateString()}
          </Typography>
        </span>
      </div>
      <Divider />
      <div style={{ marginTop: '10px'}}>
        <Typography variant="body1" gutterBottom>
          {body}
        </Typography>
      </div>
    </Paper>
  )
}