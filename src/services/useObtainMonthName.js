import { useEffect, useState } from 'react'

export const useObtainMonthName = ({ lang, year, month }) => {
  // Creamos el formato de nuestra fecha para obtener los textos de los meses
  const [formatMonth, setFormatMonth] = useState(Intl.DateTimeFormat(lang, { month: 'long' }))
  // Obtenemos el nombre del mes
  const [monthText, setMonthText] = useState(formatMonth.format(new Date(year, month)))
  // Creamos la funcion que cambia el nombre del mes
  const changeMonthText = (newYear, newMonth) => {
    const newMonthName = formatMonth.format(new Date(newYear, newMonth))
    setMonthText(newMonthName)
  }

  useEffect(() => {
    changeMonthText(year, month)
  }, [formatMonth])
  // Controlamos si cambia el idioma
  useEffect(() => {
    const newFormatMonth = Intl.DateTimeFormat(lang, { month: 'long' })
    setFormatMonth(newFormatMonth)
  }, [lang])

  return { monthText, changeMonthText }
}
