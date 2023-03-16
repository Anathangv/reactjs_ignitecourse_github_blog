import { useNavigate } from 'react-router-dom'
import { IIssue } from '../../../../contexts/BlogContext'
import { dateFormatter } from '../../../../utils/formatter'
import { PostContainer } from './styles'

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
        <span>{dateFormatter(createdAt.toString())}</span>
      </div>
      <p>{body}</p>
    </PostContainer>
  )
}
