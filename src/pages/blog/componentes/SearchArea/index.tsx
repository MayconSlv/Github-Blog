import { SearchAreaForm } from "./styles"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

interface SearchInputProps {
  postsLenght: number
  getPosts: (query?: string) => Promise<void>
}

const searchFormAreaSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormAreaSchema>

export function SearchArea({ postsLenght, getPosts }: SearchInputProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormAreaSchema)
  })

  async function handleSearchPost (data: SearchFormInput) {
    await getPosts(data.query)
  }

  return (
    <SearchAreaForm onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>{postsLenght} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchAreaForm>
  )
}