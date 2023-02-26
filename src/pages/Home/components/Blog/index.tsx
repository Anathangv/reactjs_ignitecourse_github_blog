import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { Post } from '../Post'
import { BlogContainer } from './styles'

export function Blog() {
  const { issues } = useContext(BlogContext)

  return (
    <BlogContainer>
      {issues.map((publication) => (
        <Post key={publication.number} publication={publication} />
      ))}
    </BlogContainer>
  )
}
