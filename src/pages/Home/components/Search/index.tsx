import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/BlogContext'
import { InputSearch, SearchContainer } from './styles'

export function Search() {
  const { issues } = useContext(BlogContext)

  return (
    <SearchContainer>
      <div>
        <span>Publicações</span>
        <span>{`${issues.length} publicações`}</span>
      </div>
      <InputSearch placeholder="Buscar conteúdo" type="text" />
    </SearchContainer>
  )
}
