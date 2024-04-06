import { useState } from 'react'
import { SearchIcon, PlusIcon } from '../Icons/IconsReact'
import { getAllEvents, getMunicipalityById, getLocationById } from '../lib/getsData'
import { TypeEvent } from './TypeEvent'

export const Searcher = () => {
  const events = getAllEvents()

  const [filteredEvents, setFilteredEvents] = useState([])
  const [actualValue, setActualValue] = useState('')

  const [coincidences, setCoincidences] = useState([])

  const handleFiltered = (e) => {
    const value = e.target.value.toLowerCase()
    setActualValue(e.target.value)
    const newCoincidences = []
    const filtered = events.filter(e => {
      const actualMunicipality = getMunicipalityById({idEvent: e.id_evento})
      const actualLocation = getLocationById({idEvent: e.id_evento})
      const actualCoincidence = {name: false, location: false, municipality: false}
      if (value.length === 0) return false
      if (e.nombre_evento.toLowerCase().includes(value)) actualCoincidence.name = true
      if (actualMunicipality.nombre_municipio.toLowerCase().includes(value)) actualCoincidence.municipality = true
      if (actualLocation.nombre_localidad.toLowerCase().includes(value)) actualCoincidence.location = true
      const include = e.nombre_evento.toLowerCase().includes(value) || actualMunicipality.nombre_municipio.toLowerCase().includes(value) || actualLocation.nombre_localidad.toLowerCase().includes(value)
      if (include) newCoincidences.push(actualCoincidence)
      return include
    })
    setFilteredEvents(filtered)
    setCoincidences(newCoincidences)
  }
  
  const handleReset = () => {
    setActualValue('')
    setFilteredEvents([])
    setCoincidences([])
  }
  return (
    <>
      <form action='' className='p-2 relative flex items-center gap-2'>
        <input 
          type='text' 
          name='' 
          id='' 
          className='p-2 rounded-lg w-full'
          onChange={(event) => handleFiltered(event)}
          value={actualValue}
        />
        <button className='hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200 text-xl'>
          <SearchIcon />
        </button>
      </form>
      {
        filteredEvents.length > 0
          ? <div className='absolute top-32 lg:top-14 right-0 z-[60] w-full lg:min-w-[400px] lg:w-fit max-h-[600px] lg:max-h-[500px] bg-light-surface font-normal overflow-y-auto flex flex-col gap-2 p-2 text-light-text'>
            <p onClick={handleReset} className='flex items-center gap-2 justify-center hover:text-light-error cursor-pointer font-semibold bg-light-background rounded-md p-1'>Cerrar buscador <PlusIcon className='rotate-45' /></p>
              {
                filteredEvents.map((e, i) => {
                  const actualMunicipality = getMunicipalityById({idEvent: e.id_evento})
                  const actualLocation = getLocationById({idEvent: e.id_evento})
                  return(
                    <a 
                      onClick={handleReset}
                      href={`/evento/${e.id_evento}`} 
                      key={e.id_evento} 
                      className='cursor-pointer flex items-center p-2 gap-2 bg-light-background/70 dark:bg-dark-background/70 hover:bg-light-background dark:hover:bg-dark-background transition-colors duration-200 rounded-lg'
                    >
                      <TypeEvent id={e.id_tipo_evento} />
                      <div>
                        <p className={`${coincidences[i].name ? 'text-light-secondary font-semibold' : ''}`}>{e.nombre_evento}</p>
                        <p className={`${coincidences[i].location ? 'text-light-secondary font-semibold' : ''}`}>{actualLocation.nombre_localidad}</p>
                        <p className={`${coincidences[i].municipality ? 'text-light-secondary font-semibold' : ''}`}>{actualMunicipality.nombre_municipio}</p>
                      </div>
                    </a>
                  )
                })
              }
            </div>
          : ''
      }
    </>
  )
}