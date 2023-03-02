import { useContext } from 'react'
import { Loading } from '../../components/Loading'
import { BlogContext } from '../../contexts/BlogContext'
import { Blog } from './components/Blog'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer } from './styles'

export function Home() {
  const { isLoading } = useContext(BlogContext)
  return (
    <HomeContainer>
      <Profile />
      <Search />
      {isLoading ? <Loading /> : <Blog />}
    </HomeContainer>
  )
}
