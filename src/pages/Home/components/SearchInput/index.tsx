import { SearchInputContainer } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer>
      <div>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </div>
      <input type="text" placeholder="Buscar publicações" />
    </SearchInputContainer>
  )
}
