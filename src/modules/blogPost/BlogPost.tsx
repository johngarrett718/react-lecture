export const BlogPost = ({
  title,
  body,
  date, 
}: any) => {
  return (
    <div>
      <span>{title}</span>
      <span>{date.toString()}</span>
      <div>{body}</div>
    </div>
  )
}