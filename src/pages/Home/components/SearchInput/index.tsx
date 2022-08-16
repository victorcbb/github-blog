import { SearchInputContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const sarchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof sarchFormSchema>

interface SearchInputProps {
  postLength: number
  getPosts: (query: string) => Promise<void>
}

export function SearchInput({ getPosts, postLength }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(sarchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <strong>Publicações</strong>
        <span>{postLength} publicações</span>
      </div>
      <input
        type="text"
        placeholder="Buscar publicações"
        {...register('query')}
      />
    </SearchInputContainer>
  )
}
