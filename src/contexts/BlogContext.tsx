import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

/*
TODO
 - callback in normalize function
*/

interface IBlogProviderProps {
  children: ReactNode
}

interface IProfileResponse {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: number
}

interface IProfile {
  login: string
  avatarUrl: string
  htmlUrl: string
  name: string
  company: string
  bio: string
  followers: number
}

interface IBlogContext {
  profile: IProfile
}

export const BlogContext = createContext({} as IBlogContext)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [profile, setProfile] = useState<IProfile>({} as IProfile)

  function normalizeProfileData(profileDataResponse: IProfileResponse) {
    setProfile({
      avatarUrl: profileDataResponse.avatar_url,
      bio: profileDataResponse.bio,
      company: profileDataResponse.company,
      followers: profileDataResponse.followers,
      htmlUrl: profileDataResponse.html_url,
      login: profileDataResponse.login,
      name: profileDataResponse.name,
    } as IProfile)
  }

  async function fetchProfileData() {
    const response = await api.get('users/rocketseat-education')

    console.log(response.data)
    normalizeProfileData(response.data)
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  return (
    <BlogContext.Provider value={{ profile }}>{children}</BlogContext.Provider>
  )
}
