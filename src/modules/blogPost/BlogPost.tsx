import './BlogPost.css'

export interface BlogPostProps {
  title: string
  body: string
  date: Date
  verified?: boolean
}

export const BlogPost = ({
  title,
  body,
  date, 
  verified
}: BlogPostProps) => {
  const backgroundColor = verified ? 'lightBlue' : undefined
  return (
    <div className='blogPost' style={{ backgroundColor }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <span style={{ fontWeight: 'bold', fontSize: '25px', flex: '1'}}>{title}</span>
        <span>{date.toLocaleString()}</span>
      </div>
      <div style={{ marginTop: '10px '}}>{body}</div>
    </div>
  )
}