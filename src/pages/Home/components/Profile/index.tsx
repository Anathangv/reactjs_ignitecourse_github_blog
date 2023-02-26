// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { ContentContainer, Detail, ProfileContainer } from './styles'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'

export function Profile() {
  const {
    profile: { avatarUrl, bio, company, followers, htmlUrl, login, name },
  } = useContext(BlogContext)

  return (
    <ProfileContainer>
      <img src={avatarUrl} alt="foto de profile" />

      <ContentContainer>
        <header>
          <h3>{name}</h3>
          <a href={htmlUrl} target="_blank" rel="noreferrer">
            GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>
        <p>{bio}</p>
        <div>
          <Detail>
            <FontAwesomeIcon icon={faGithub} />
            <span>{login}</span>
          </Detail>
          <Detail>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{company}</span>
          </Detail>
          <Detail>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{`${followers} seguidores`}</span>
          </Detail>
        </div>
      </ContentContainer>
    </ProfileContainer>
  )
}
