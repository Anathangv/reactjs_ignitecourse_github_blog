import { Content } from './components/Content'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

export function Post() {
  return (
    <PostContainer>
      <PostInfo />
      <Content />
    </PostContainer>
  )
}
