import { municipios, localidad, eventos, tipo_de_eventos } from './testData'

const separatorKeyWords = ', '
const separatorStartDay = '-'

const eventHaveStartDate = ({event}) => {
  return event.fecha_inicio.length > 0
}

export const getAllMunicipality = () => {
  return municipios
}

export const getAllLocations = () => {
  return localidad
}

export const getAllTypeEvents = () => {
  return tipo_de_eventos
}

export const getAllEvents = () => {
  return eventos
}

export const getEventById = ({id}) => {
  const events = getAllEvents()
  return events.find(e => e.id_evento === parseInt(id))
}

export const getDateEvents = () => {
  const events = getAllEvents()
  const dateEvents = events.map(e => {
    const date = new Date(e.fecha_inicio)
    return date
  })
  return dateEvents
}

export const getEventsInMonth = ({month}) => {
  const events = getAllEvents()
  const monthEvents = events.filter(e => e.mes_estimado.toUpperCase() === month.toUpperCase())
  return monthEvents
}

export const getEventsInDay = ({day, month}) => {
  const eventsInMonth = getEventsInMonth({month})
  const eventsInDay = eventsInMonth.filter(e => {
    if (eventHaveStartDate({event: e})) {
      const [y, m, d] = e.fecha_inicio.split(separatorStartDay)
      return parseInt(d) === parseInt(day)
    }
  })
  return eventsInDay
}

export const getEventsByType = () => {
  const events = getAllEvents()
  const types = getAllTypeEvents()
  const eventsByType = []
  types.forEach(type => {
    const eventsFiltered = events.filter(e => e.id_tipo_evento === type.id_tipo_evento)
    eventsByType.push({type: type.nombre_tipo_de_evento, events:eventsFiltered})
  })
  return eventsByType
}

export const getEventByMunicipalitys = () => {
  const events = getAllEvents()
  const municipalitys = getAllMunicipality()
  const eventsByMunicipality = []
  municipalitys.forEach(municipality => {
    const eventsFiltered = events.filter(e => e.id_municipio === municipality.id_municipio)
    eventsByMunicipality.push({type: municipality.nombre_municipio, events:eventsFiltered})
  })
  return eventsByMunicipality
}

export const getMunicipalityById = ({idEvent}) => {
  const event = getEventById({id: idEvent})
  const municipalitys = getAllMunicipality()
  return municipalitys.find(m => m.id_municipio === event.id_municipio)
}

export const getLocationById = ({idEvent}) => {
  const event = getEventById({id: idEvent})
  const locations = getAllLocations()
  return locations.find(l => parseInt(l.id_localidad) === parseInt(event.id_localidad))
}

export const getTypeById = ({idEvent}) => {
  const event = getEventById({id: idEvent})
  const types = getAllTypeEvents()
  return types.find(t => t.id_tipo_evento === event.id_tipo_evento)
}

export const getAllTags = () => {
  const events = getAllEvents()
  const tags = []
  events.forEach(e => {
    const actualTags = e.palabras_claves.split(separatorKeyWords)
    actualTags.forEach(t => {
      if(!tags.includes(t.toLowerCase())) {
        tags.push(t.toLowerCase())
      }
    })
  })
  return tags
}

export const getEventByTag = ({tag}) => {
  const events = getAllEvents()
  const eventsByTag = events.filter(e => {
    const tagsOfEvent = e.palabras_claves.split(separatorKeyWords)
    const parsedTag = []
    tagsOfEvent.forEach(t => parsedTag.push(t.toLowerCase()))
    return parsedTag.includes(tag.toLowerCase())
  })
  return eventsByTag
}

export const getEventByLocation = ({location}) => {
  const events = getAllEvents()
  const locations = getAllLocations()
  const actualLocation = locations.filter(l => l.nombre_localidad.toLowerCase() === location.toLowerCase())
  const eventsByLocation = events.filter(e => {
    return parseInt(e.id_localidad) === parseInt(actualLocation[0].id_localidad)
  })
  return eventsByLocation
}

export const getEventByMunicipality = ({municipality}) => {
  const events = getAllEvents()
  const municipalitys = getAllMunicipality()
  const actualMunicipality = municipalitys.filter(m => m.nombre_municipio.toLowerCase() === municipality.toLowerCase())
  const eventsByMunicipality = events.filter(e => {
    return parseInt(e.id_municipio) === parseInt(actualMunicipality[0].id_municipio)
  })
  return eventsByMunicipality
}

export const getEventByType = ({type}) => {
  const events = getAllEvents()
  const types = getAllTypeEvents()
  const actualType = types.filter(t => t.nombre_tipo_de_evento.toLowerCase() === type.toLowerCase())
  const eventsByType = events.filter(e => {
    return parseInt(e.id_tipo_evento) === parseInt(actualType[0].id_tipo_evento)
  })
  return eventsByType
}
