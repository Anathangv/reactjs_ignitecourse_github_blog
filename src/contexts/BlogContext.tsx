import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

/*
TODO
 - callback in normalize function
 - add a image/message when no blog found 
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

interface IIssueItemResponse {
  number: number
  title: string
  created_at: Date
  body: string
}

interface IIssueResponse {
  items: IIssueItemResponse[]
}

export interface IIssue {
  number: number
  title: string
  createdAt: Date
  body: string
}

interface IBlogContext {
  profile: IProfile
  issues: IIssue[]
  fetchIssues: (query?: string) => void
}

export const BlogContext = createContext({} as IBlogContext)

export function BlogProvider({ children }: IBlogProviderProps) {
  const [profile, setProfile] = useState<IProfile>({} as IProfile)
  const [issues, setIssues] = useState<IIssue[]>([])

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

  async function fetchProfile() {
    const response = await api.get('users/rocketseat-education')

    console.log(response.data)
    normalizeProfileData(response.data)
  }

  function normalizeIssues(issues: IIssueResponse) {
    const nomalizedIssues = issues.items.map((issue) => {
      return {
        number: issue.number,
        title: issue.title,
        createdAt: issue.created_at,
        body: issue.body,
      } as IIssue
    })

    console.log(nomalizedIssues)
    setIssues(nomalizedIssues)
  }

  async function fetchIssues(query?: string) {
    query = query || ''

    const response = await api.get(
      `search/issues?q=${query}repo:rocketseat-education/reactjs-github-blog-challenge`,
    )

    normalizeIssues(response.data)
  }

  useEffect(() => {
    fetchProfile()
    fetchIssues()
  }, [])

  return (
    <BlogContext.Provider value={{ profile, issues, fetchIssues }}>
      {children}
    </BlogContext.Provider>
  )
}
