// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { ContentContainer, Detail, ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="" alt="foto de profile" />

      <ContentContainer>
        <header>
          <h3>Marcos Anathan</h3>
          <a href="#">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <Detail>
            <FontAwesomeIcon icon={faGithub} />
            <span>anathangv</span>
          </Detail>
          <Detail>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </Detail>
          <Detail>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </Detail>
        </div>
      </ContentContainer>
    </ProfileContainer>
  )
}
