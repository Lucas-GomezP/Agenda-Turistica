import { useEffect, useState } from 'react'
import { SearchAside } from './SearchAside'
import { CalendarAside } from './CalendarAside'
import { CalendarIcon, SearchIcon, DarkLightModeIcon } from '../Icons/IconsReact'
import { darkLightMode } from '../services/darkLightMode'

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

  const handleDarkLightMode = () => {
    darkLightMode()
  }

  return (
    <>
      <header className='bg-light-surface dark:bg-dark-surface text-light-text font-bold dark:text-dark-text transition-color duration-200 [grid-area:header] min-h-14 flex items-center justify-between text-2xl'>
        <h1 className='p-2'><a href='/' onClick={handleNotShowMenus}>Agenda Turistica</a></h1>
        <div className='flex items-center'>
          <button
            className='p-2 relative flex items-center gap-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
            onClick={handleShowSearch}
          >
            <p className='text-lg'>Buscar</p>
            <SearchIcon />
          </button>
          <button
            className='p-2 relative lg:hidden hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
            onClick={handleShowCalendar}
          >
            <CalendarIcon />
          </button>
          <button
            className='p-2 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'
            onClick={handleDarkLightMode}
          >
            <DarkLightModeIcon />
          </button>
        </div>
      </header>
      <CalendarAside show={showAsideCalendar} window={windowWidth} />
      <SearchAside handle={handleNotShowMenus} show={showAsideSearch} />
    </>
  )
}
