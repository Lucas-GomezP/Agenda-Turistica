import { TypeEvent } from './TypeEvent'
import { DiagonalArrowIcon } from '../Icons/IconsReact'

export const EventsInDay = ({events, handleShow}) => {
  return (
    <ul className='flex flex-col gap-2' >
      {
        events.map(e => {
          return (
            // <li 
            //   key={e.id_evento}
              
            //   className='bg-light-background/70 dark:bg-dark-background/70 hover:bg-light-background dark:hover:bg-dark-background transition-colors duration-200 p-2 rounded-lg'
            // >
            //   <a href={`/evento/${e.id_evento}`} className='flex items-center font-normal justify-between'>
            //     <TypeEvent key={e.id_evento} id={e.id_tipo_evento} />
            //     <div className='flex items-center gap-1'>
            //       <p className='text-ellipsis'>{e.nombre_evento}</p>
            //       <p>{e.hora ? `${e.hora.slice(0, 2)} hs` : ''}</p>
            //     </div>
            //     <DiagonalArrowIcon className='rotate-90' />
            //   </a>
            // </li>
            
            <a 
              onClick={handleShow}
              href={`/evento/${e.id_evento}`} 
              key={e.id_evento}
              className='flex items-center font-normal justify-between bg-light-background/70 dark:bg-dark-background/70 hover:bg-light-background dark:hover:bg-dark-background transition-colors duration-200 p-2 rounded-lg'
            >
              <TypeEvent key={e.id_evento} id={e.id_tipo_evento} />
              <div className='flex items-center gap-1'>
                <p className='text-ellipsis'>{e.nombre_evento}</p>
                <p>{e.hora ? `${e.hora.slice(0, 2)} hs` : ''}</p>
              </div>
              <DiagonalArrowIcon className='rotate-90' />
            </a>
          )
        })
      }
    </ul>
  )
}