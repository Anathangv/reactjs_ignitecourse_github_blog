import { Blog } from './components/Blog'
import { Profile } from './components/Profile'
import { Search } from './components/Search'

export function Home() {
  return (
    <>
      <Profile />
      <Search />
      <Blog />
    </>
  )
}
