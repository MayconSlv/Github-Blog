import { PostContentContainer } from "./styles"
import ReactMrkDown from 'react-markdown'

interface PostContentProps {
  content: string
}

export function PostContent ({content}: PostContentProps)  {
  return (
    <PostContentContainer>
      <ReactMrkDown children={content} />  
    </PostContentContainer>
  )
}