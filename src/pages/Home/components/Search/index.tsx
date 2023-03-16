import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { BlogContext } from '../../../../contexts/BlogContext'
import { SearchContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchPublicationFormDataSchema = zod.object({
  search: zod.string(),
})

type searchPublicationFormData = zod.infer<
  typeof searchPublicationFormDataSchema
>

export function Search() {
  const { issues, fetchIssues } = useContext(BlogContext)
  const { register, handleSubmit } = useForm<searchPublicationFormData>({
    resolver: zodResolver(searchPublicationFormDataSchema),
  })

  function handleSearchNotification(formSearch: searchPublicationFormData) {
    fetchIssues(formSearch.search)
  }

  function handleEmptySearchExit(query: string) {
    if (!query && !issues.length) {
      fetchIssues('')
    }
  }

  return (
    <SearchContainer>
      <div>
        <span>Publicações</span>
        <span>{`${issues.length} publicações`}</span>
      </div>
      <form onSubmit={handleSubmit(handleSearchNotification)} action="">
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('search')}
          onBlur={(event) => handleEmptySearchExit(event.target.value)}
        />
      </form>
    </SearchContainer>
  )
}
