export const adaptCalendarShow = ({window}) => {
  if (window) {
    const calendarAside = document.getElementById('calendar-aside')
    calendarAside.classList.toggle('translate-x-full')
  }
}