import { HomeIcon, SearchIcon, FilterIcon } from '../Icons/IconsReact'

export const SearchAside = ({handle, show}) => {
  return (
    <aside
      id='aside-container'
      className={`bg-light-surface dark:bg-dark-surface transition-color duration-200
      row-start-2 row-end-2 
      absolute top-0
      flex flex-col
      overflow-y-auto rounded-lgtop-0 bottom-0 w-full z-50 
      transition-transform
      ${show ? 'translate-x-0' : '-translate-x-full'}
      `}
    >
      <nav>
        <div>
          <ul className='flex flex-col gap-2'>
            <SideMenuItem 
              href='/'
              showMenu={handle}
            >
              <HomeIcon />
              Inicio
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda'
              showMenu={handle}
            >
              <SearchIcon />
              Buscar eventos
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda/municipio'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Municipio
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda/localidad'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Localidad
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda/tipo'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Tipo
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda/etiqueta'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Etiqueta
            </SideMenuItem>
            <SideMenuItem 
              href='/busqueda/fecha'
              showMenu={handle}
            >
              <FilterIcon />
              Filtrar por Fecha
            </SideMenuItem>
          </ul>
        </div>
      </nav>
    </aside>
  )
}

const SideMenuItem = ({children, href, showMenu}) => {
  return (
    <li className='p-2'>
      <a 
        href={href} 
        className='flex items-center justify-center rounded-md gap-2 text-xl font-bold bg-light-background dark:bg-dark-background p-2 hover:bg-light-primary text-light-text dark:text-dark-text dark:hover:bg-dark-primary transition-color duration-200' 
        onClick={showMenu}
      >
        {children}
      </a>
    </li>
  )
}