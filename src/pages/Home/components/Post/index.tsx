import { useNavigate } from 'react-router-dom'
import { PostContainer } from './styles'

export function Post() {
  const navigate = useNavigate()

  function handleClickOpenPost() {
    navigate('/post')
  }

  return (
    <PostContainer onClick={handleClickOpenPost}>
      <div>
        <span>Javascript data types and data structures </span>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </PostContainer>
  )
}
