import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faLessThan,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import {
  NavegationContainer,
  DetailContainer,
  PostInfoContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { IPublication } from '../..'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { dateFormatter } from '../../../../utils/formatter'

interface IPostInfoProps {
  publication: IPublication
}

export function PostInfo({ publication }: IPostInfoProps) {
  const navegate = useNavigate()
  const {
    profile: { login, htmlUrl },
  } = useContext(BlogContext)

  function handleClickReturn() {
    navegate(-1)
  }

  const { comments, createdAt, title } = publication

  return (
    <PostInfoContainer>
      <NavegationContainer>
        <span onClick={handleClickReturn}>
          <FontAwesomeIcon icon={faLessThan} />
          <span>VOLTAR</span>
        </span>
        <a href={htmlUrl} target="_blank" rel="noreferrer">
          <span>VER NO GITHUB</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavegationContainer>
      <header>
        <h3>{title}</h3>
      </header>
      <DetailContainer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {dateFormatter(createdAt?.toString())}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {`${comments} comentário(s)`}
        </span>
      </DetailContainer>
    </PostInfoContainer>
  )
}
