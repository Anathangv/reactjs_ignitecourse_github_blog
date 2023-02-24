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

export function PostInfo() {
  return (
    <PostInfoContainer>
      <NavegationContainer>
        <a href="#">
          <FontAwesomeIcon icon={faLessThan} />
          VOLTAR
        </a>
        <a href="#">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
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
          Rocketseat
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          32 seguidores
        </span>
      </DetailContainer>
    </PostInfoContainer>
  )
}
