import { SearchAreaForm } from "./styles"
import * as z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormAreaSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormAreaSchema>

export function SearchArea() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormAreaSchema)
  })

  function handleSearchPost (data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchAreaForm onSubmit={handleSubmit(handleSearchPost)}>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchAreaForm>
  )
}