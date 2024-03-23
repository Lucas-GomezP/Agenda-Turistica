import { useEffect, useState } from 'react'

export const useObtainWeekDaysName = ({ lang }) => {
  // Creamos el formato de nuestra fecha para obtener los textos de los dias de la semana
  const [formatWeekDays, setFormaWeekDays] = useState(Intl.DateTimeFormat(lang, { weekday: 'short' }))
  // Creamos el estado que almacenara los nombres de la semana
  const [weekDayText, setWeekDayText] = useState([])

  useEffect(() => {
    // Creamos el array que almacenara los nombres
    const weekdays = [...Array(7).keys()]
    const weekdaysName = weekdays.map(i => {
      const weekname = formatWeekDays.format(new Date(2023, 7, i))
      return weekname
    })
    setWeekDayText(weekdaysName)
  }, [formatWeekDays])

  useEffect(() => {
    const newFormatWeekDays = Intl.DateTimeFormat(lang, { weekday: 'short' })
    setFormaWeekDays(newFormatWeekDays)
  }, [lang])

  return { weekDayText }
}
