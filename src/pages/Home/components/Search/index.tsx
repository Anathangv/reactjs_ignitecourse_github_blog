import { InputSearch, SearchContainer } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <div>
        <span>Publicações</span>
        <span>6 publicações</span>
      </div>
      <InputSearch placeholder="Buscar conteúdo" type="text" />
    </SearchContainer>
  )
}
