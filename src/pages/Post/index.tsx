import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading } from '../../components/Loading'
import { BlogContext } from '../../contexts/BlogContext'
import { api } from '../../lib/axios'
import { Content } from './components/Content'
import { PostInfo } from './components/PostInfo'
import { PostContainer } from './styles'

interface IPublicationResponse {
  title: string
  created_at: Date
  body: string
  comments: number
}

export interface IPublication {
  title: string
  createdAt: Date
  body: string
  comments: number
}

export function Post() {
  const [publication, setPublication] = useState<IPublication>(
    {} as IPublication,
  )
  const { isLoading } = useContext(BlogContext)

  const { publicationId } = useParams()

  function normalizeIssue(publicationResponse: IPublicationResponse) {
    const publication = {
      comments: publicationResponse.comments,
      title: publicationResponse.title,
      createdAt: publicationResponse.created_at,
      body: publicationResponse.body,
    } as IPublication

    setPublication(publication)
  }

  async function fetchPublication() {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${publicationId}`,
    )

    normalizeIssue(response.data)
  }

  useEffect(() => {
    fetchPublication()
  }, [publicationId])

  return (
    <PostContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PostInfo publication={publication} />
          <Content publication={publication} />
        </>
      )}
    </PostContainer>
  )
}
