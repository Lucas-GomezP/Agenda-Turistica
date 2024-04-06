import { useEffect, useState } from 'react'
import { SearchAside } from './SearchAside'
import { CalendarAside } from './CalendarAside'
import { CalendarIcon, SearchIcon, DarkLightModeIcon, FilterIcon } from '../Icons/IconsReact'
import { darkLightMode } from '../services/darkLightMode'
import { Searcher } from './Searcher'


export const HeaderAside = () => {
  const [showAsideCalendar, setShowAsideCalendar] = useState(false)
  const [showAsideSearch, setShowAsideSearch] = useState(false)

  const [windowWidth, setWindowWidth] = useState()
  let wValue = undefined
  if (typeof window !== 'undefined') {
    wValue = window.innerWidth
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const newWindowWidth = window.innerWidth < 1024
      setWindowWidth(newWindowWidth)
    }
  }, [wValue])
  
  const handleShowCalendar = () => {
    const newState = !showAsideCalendar
    if (showAsideSearch) {
      handleShowSearch()
    }
    setShowAsideCalendar(newState)
  }
  const handleShowSearch = () => {
    const newState = !showAsideSearch
    if (showAsideCalendar) {
      handleShowCalendar()
    }
    setShowAsideSearch(newState)
  }

  const handleNotShowMenus = () => {
    setShowAsideCalendar(false)
    setShowAsideSearch(false)
  }

  // const handleDarkLightMode = () => {
  //   darkLightMode()
  // }

  return (
    <>
      <header className='bg-light-surface dark:bg-dark-surface text-light-text font-bold dark:text-dark-text transition-color duration-200 [grid-area:header] min-h-14 flex items-center justify-between'>
        <h1 className='p-2 text-2xl'><a href='/' onClick={handleNotShowMenus}>Agenda Turistica</a></h1>
        {
          windowWidth
            ? ''
            : <nav className='flex'>
                <ul className='flex flex-row gap-2'>
                  <SearchNavItem 
                    href='/busqueda/municipio'
                  >
                    Municipios
                  </SearchNavItem>
                  <SearchNavItem 
                    href='/busqueda/localidad'
                  >
                    Localidades
                  </SearchNavItem>
                  <SearchNavItem 
                    href='/busqueda/tipo'
                  >
                    Tipos de eventos
                  </SearchNavItem>
                  <SearchNavItem 
                    href='/busqueda/etiqueta'
                  >
                    Etiquetas
                  </SearchNavItem>
                </ul>
              </nav>
        }
        {
          windowWidth
            ? <button
                className='p-2 relative flex items-center gap-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
                onClick={handleShowSearch}
              >
                <p className='text-lg'>Buscar</p>
                <SearchIcon />
              </button>
            : <Searcher />
        }
          
          <button
            className='p-2 relative lg:hidden hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
            onClick={handleShowCalendar}
          >
            <CalendarIcon />
          </button>
          {/* <button
            className='p-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
            onClick={handleDarkLightMode}
          >
            <DarkLightModeIcon />
          </button> */}
      </header>
      <CalendarAside show={showAsideCalendar} handleMenu={handleNotShowMenus}/>
      {
        windowWidth
          ? <SearchAside handle={handleNotShowMenus} show={showAsideSearch} />
          : ''
      }
    </>
  )
}

const SearchNavItem = ({children, href}) => {
  return (
    <a 
      href={href}
      className=' flex items-center rounded-md gap-2 text-normal font-bold bg-light-background dark:bg-dark-background p-2 hover:bg-light-primary text-light-text dark:text-dark-text dark:hover:bg-dark-primary transition-color duration-200'
    >
      {children}
    </a>
  )
}