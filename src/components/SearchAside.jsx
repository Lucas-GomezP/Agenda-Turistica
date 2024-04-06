import { HomeIcon, SearchIcon, FilterIcon } from '../Icons/IconsReact'
import { SearchMenuItem } from './SearchMenuItem'
import { Searcher } from './Searcher'

export const SearchAside = ({handle, show}) => {
  return (
    <aside
      id='aside-container'
      className={`bg-light-surface dark:bg-dark-surface transition-color duration-200
      row-start-2 row-end-2 
      absolute top-0
      flex flex-col
      overflow-y-auto bottom-0 w-full z-50 
      transition-transform
      ${show ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav>
        <div>
          <ul className='flex flex-col gap-2'>
            <SearchMenuItem 
              href='/'
              showMenu={handle}
            >
              <HomeIcon />
              Inicio
            </SearchMenuItem>
            <Searcher />
            {/* <SearchMenuItem 
              href='/busqueda'
              showMenu={handle}
            >
              <SearchIcon />
              Buscar eventos
            </SearchMenuItem> */}
            <SearchMenuItem 
              href='/busqueda/municipio'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Municipio
            </SearchMenuItem>
            <SearchMenuItem 
              href='/busqueda/localidad'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Localidad
            </SearchMenuItem>
            <SearchMenuItem 
              href='/busqueda/tipo'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Tipo
            </SearchMenuItem>
            <SearchMenuItem 
              href='/busqueda/etiqueta'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Etiqueta
            </SearchMenuItem>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
