import { Calendar } from './Calendar'
import { getAllEvents, getEventsInDay, getEventsInMonth, getLocationById } from '../lib/getsData'
import { useEffect, useState } from 'react'
import { SliderEvents } from './SliderEvents'
import { EventsInDay } from './EventsInDay'
import { TypeEvent } from './TypeEvent'
import { DiagonalArrowIcon } from '../Icons/IconsReact'

export const CalendarAside = ({show, handleMenu}) => {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const newEvents = getAllEvents()
    setEvents(newEvents)
  }, [])

  const [actualMonth, setActualMonth] = useState('')
  const handleActualMonth = ({month}) => {
    const newMonth = month
    setActualMonth(newMonth)
  }

  const [actualDay, setActualDay] = useState('')
  const handleActualDay = ({day}) => {
    const newDay = day
    setActualDay(newDay)
  }

  const [eventsInMonth, setEventsInMonth] = useState([])
  useEffect(() => {
    const newEventsInMonth = getEventsInMonth({month: actualMonth})
    setEventsInMonth(newEventsInMonth)
  }, [actualMonth])

  const [eventsInDay, setEventsInDay] = useState([])
  useEffect(() => {
    const newEventsInDay = getEventsInDay({day: actualDay, month: actualMonth})
    setEventsInDay(newEventsInDay)
  }, [actualDay, actualMonth])

  return (
    <aside
      className={`bg-light-surface dark:bg-dark-surface text-light-text font-bold dark:text-dark-text transition-color duration-200
      row-start-2 row-end-2 
      absolute top-0
      lg:[grid-area:aside]
      lg:translate-x-0
      lg:flex lg:flex-col lg:w-full
      overflow-y-auto bottom-0 w-full z-50 
      transition-transform
      ${show ? 'translate-x-0' : 'translate-x-full'}
      `}
    >
      <Calendar events={events} handleActualMonth={handleActualMonth} handleActualDay={handleActualDay} />
      <h3 className='text-lg font-bold p-2 text-center'>Eventos de <span className='capitalize'>{actualMonth}</span></h3>
      {
        eventsInMonth.length > 0
          ? <div className='p-2'>
              <SliderEvents events={eventsInMonth} little={true} />
            </div>
          : <p className='text-center font-normal'>No hay eventos este mes 😭</p>
      }
      <h3 className='text-lg font-bold p-2 text-center'>Eventos del {actualDay} de <span className='capitalize'>{actualMonth}</span></h3>
      {
        eventsInDay.length > 0
          ? <div className='p-2'>
              <ul className='flex flex-col gap-2' >
                {
                  eventsInDay.map(e => {
                    const location = getLocationById({idEvent: e.id_evento})
                    return (
                      <a 
                        href={`/evento/${e.id_evento}`} 
                        key={e.id_evento}
                        className='flex flex-col items-center font-normal justify-between bg-light-background/70 dark:bg-dark-background/70 hover:bg-light-background dark:hover:bg-dark-background transition-colors duration-200 p-2 rounded-lg'
                      >
                        <div className='flex justify-between w-full items-center'>
                          <TypeEvent key={e.id_evento} id={e.id_tipo_evento} />
                          <div className='flex items-center gap-1'>
                            <div>
                              <p className='text-balance text-center'>{e.nombre_evento}</p>
                            </div>
                            <p className='text-nowrap'>{e.hora ? `${e.hora.slice(0, 2)} hs` : ''}</p>
                          </div>
                          <DiagonalArrowIcon className='rotate-90' />
                        </div>
                        <p className='text-center'>{location.nombre_localidad}</p>
                      </a>
                    )
                  })
                }
              </ul>
            </div>
          : <p className='text-center font-normal'>No hay eventos esta fecha 😭</p>
      }
    </aside>
  )
}