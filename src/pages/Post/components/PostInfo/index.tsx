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

export function PostInfo() {
  const navegate = useNavigate()

  function handleClickReturn() {
    navegate('/')
  }

  return (
    <PostInfoContainer>
      <NavegationContainer>
        <span onClick={handleClickReturn}>
          <FontAwesomeIcon icon={faLessThan} />
          <span>VOLTAR</span>
        </span>
        <span>
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </span>
      </NavegationContainer>
      <header>
        <h3>JavaScript data types and data structures</h3>
      </header>
      <DetailContainer>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          anathangv
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há um dia
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          32 comentários
        </span>
      </DetailContainer>
    </PostInfoContainer>
  )
}
