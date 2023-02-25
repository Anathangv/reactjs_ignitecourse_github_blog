// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { ContentContainer, Detail, ProfileContainer } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface IProfileDataResponse {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface IProfileData {
  login: string
  avatarUrl: string
  htmlUrl: string
  name: string
  company: string
  bio: string
  followers: number
}

/*
TODO
 - callback in normalize function
*/

export function Profile() {
  const [profileData, setProfileData] = useState<IProfileData>(
    {} as IProfileData,
  )

  function normalizeProfileData(profileDataResponse: IProfileDataResponse) {
    setProfileData({
      avatarUrl: profileDataResponse.avatar_url,
      bio: profileDataResponse.bio,
      company: profileDataResponse.company,
      followers: profileDataResponse.followers,
      htmlUrl: profileDataResponse.html_url,
      login: profileDataResponse.login,
      name: profileDataResponse.name,
    } as IProfileData)
  }

  async function fetchProfileData() {
    const response = await api.get('users/rocketseat-education')

    console.log(response.data)
    normalizeProfileData(response.data)
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  const { name, avatarUrl, bio, company, followers, htmlUrl, login } =
    profileData

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
