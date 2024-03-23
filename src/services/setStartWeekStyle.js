export const setStartWeekStyle = (val) => {
  const root = document.documentElement
  if (val === 0) {
    root.style.setProperty('--first-day-start', 7)
  } else {
    root.style.setProperty('--first-day-start', val)
  }
}
