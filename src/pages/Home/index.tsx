import { Blog } from './components/Blog'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Search />
      <Blog />
    </HomeContainer>
  )
}
