import { useEffect, useState } from 'react'
import { useObtainMonthName } from '../services/useObtainMonthName'
import { useObtainWeekDaysName } from '../services/useObtainWeekDaysName'
import { setStartWeekStyle } from '../services/setStartWeekStyle'
import { LeftArrowIcon, RightArrowIcon, PlusIcon } from '../Icons/IconsReact'
import { getDateEvents } from '../lib/getsData'
import { TypeEvent } from './TypeEvent'

export const Calendar = ({events, handleActualMonth, handleActualDay}) => {
  const lang = 'es'
  const actualDate = new Date()
  const actualDay = actualDate.getDate()
  const [selectedDay, setSelectedDay] = useState(actualDay)
  const [month, setMonth] = useState(actualDate.getMonth())
  const [year, setYear] = useState(actualDate.getFullYear())
  const [startWeekDay, setStartWeekDay] = useState(new Date(year, month, 1).getDay())
  const [daysInMonth, setDaysInMonth] = useState(new Date(year, month + 1, 0).getDate())
  const [monthDays, setMonthDays] = useState([...Array(daysInMonth).keys()])

  const { monthText, changeMonthText } = useObtainMonthName({ lang, year, month })
  const { weekDayText } = useObtainWeekDaysName({ lang, long: 'short' })

  useEffect(() => {
    const newDaysInMonth = new Date(year, month + 1, 0).getDate()
    setDaysInMonth(newDaysInMonth)
    const newStartWeekDay = new Date(year, month, 1).getDay()
    setStartWeekDay(newStartWeekDay)
    const newMonthDays = [...Array(newDaysInMonth).keys()]
    setMonthDays(newMonthDays)
  }, [month, year])

  const changeMonth = ({ change }) => {
    const newMonth = month + change
    setMonth(newMonth)
    const newYear = new Date(actualDate.getFullYear(), newMonth, 1).getFullYear()
    setYear(newYear)
    changeMonthText(newYear, newMonth)
  }

  const handleSelectedDay = (newDay) => {
    const newSelectedDay = newDay.toString()
    setSelectedDay(newSelectedDay)
  }
  
  useEffect(() => {
    handleActualMonth({month: monthText})
    handleActualDay({day: selectedDay, month: monthText})
  }, [selectedDay, month])
  return (
    <section className='relative'>
      <header className='flex justify-between text-lg p-2'>
        <button onClick={() => changeMonth({change: -1})} className=' hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'>
          <LeftArrowIcon />
        </button>
        <h1 className='capitalize'>{monthText}, {year}</h1>
        <button onClick={() => changeMonth({change: 1})} className=' hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-200'>
          <RightArrowIcon />
        </button>
      </header>
      <main>
        <ol className='grid grid-cols-7'>
          {
            weekDayText.map(w => {
              return (
                <li key={w} className='text-center capitalize'>{w}</li>
              )
            })
          }
        </ol>
        <ol className='grid grid-cols-7 p-2'>
          {
            monthDays.map(day => {
              const eventsToday = events.filter(e => new Date(e.fecha_inicio).toLocaleDateString() === new Date(`${month + 1}/${day}/${year}`).toLocaleDateString())
              return (
                <li
                  key={day + 1}
                  className={`
                    ${startWeekDay === 0 && day === 0 ? '' : ''}
                    ${startWeekDay === 1 && day === 0 ? 'col-start-1' : ''}
                    ${startWeekDay === 2 && day === 0 ? 'col-start-2' : ''}
                    ${startWeekDay === 3 && day === 0 ? 'col-start-3' : ''}
                    ${startWeekDay === 4 && day === 0 ? 'col-start-4' : ''}
                    ${startWeekDay === 5 && day === 0 ? 'col-start-5' : ''}
                    ${startWeekDay === 6 && day === 0 ? 'col-start-6' : ''}
                    ${day + 1 === actualDay && month === actualDate.getMonth() ? 'bg-light-primary dark:bg-dark-primary transition-color duration-200' : ''}
                    ${day + 1 === parseInt(selectedDay) ? 'ring-2 z-[5] ring-light-secondary dark:ring-dark-secondary' : ''}
                    day text-center border min-h-12 hover:bg-light-secondary dark:hover:bg-dark-secondary
                    transition-colors duration-200 cursor-pointer
                  `}
                  onClick={() => handleSelectedDay(day + 1)}
                >
                  <p>{day + 1}</p>
                  <div className='flex justify-evenly'>
                    {
                      eventsToday.slice(0, 2).map(e => {
                        return (
                          <TypeEvent key={e.id_evento} id={e.id_tipo_evento} />
                        )
                      })
                    }
                    {eventsToday.length > 2 ? <PlusIcon /> : ''}
                  </div>
                </li>
              )
            })
          }
        </ol>
      </main>
    </section>
  )
}