import ReactMarkdown from 'react-markdown'
import { IPublication } from '../..'
import { ContentContainer } from './styles'

interface IContentProps {
  publication: IPublication
}

export function Content({ publication: { body } }: IContentProps) {
  return (
    <ContentContainer>
      <ReactMarkdown>{body}</ReactMarkdown>
    </ContentContainer>
  )
}
