// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContentContainer, Detail, ProfileContainer } from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="" alt="foto de profile" />

      <ContentContainer>
        <header>
          <h3>Marcos Anathan</h3>
          <a>GITHUB</a>
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <div>
          <Detail>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <span>anathangv</span>
          </Detail>
          <Detail>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <span>Rocketseat</span>
          </Detail>
          <Detail>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <span>32 seguidores</span>
          </Detail>
        </div>
      </ContentContainer>
    </ProfileContainer>
  )
}
