import { SearchAreaForm } from "./styles";

export function SearchArea() {
  return (
    <SearchAreaForm>
      <header>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo"/>
    </SearchAreaForm>
  )
}