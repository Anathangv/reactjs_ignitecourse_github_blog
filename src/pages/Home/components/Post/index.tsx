import { useNavigate } from 'react-router-dom'
import { IIssue } from '../../../../contexts/BlogContext'
import { PostContainer } from './styles'

/*
TODO
 - fix date
 - missing retisence in blog card
*/

interface IPostProps {
  publication: IIssue
}

export function Post({ publication }: IPostProps) {
  const navigate = useNavigate()

  const { createdAt, title, body, number } = publication

  function handleClickOpenPost() {
    navigate(`/post/${number}`)
  }

  return (
    <PostContainer onClick={handleClickOpenPost}>
      <div>
        <span>{title}</span>
        <span>{createdAt.toString()}</span>
      </div>
      <p>{body}</p>
    </PostContainer>
  )
}
