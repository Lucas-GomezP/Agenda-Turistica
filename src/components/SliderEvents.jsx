import { useState, useEffect } from 'react'
import { LeftArrowIcon, RightArrowIcon } from '../Icons/IconsReact'

export const SliderEvents = ({events, little = false}) => {
  const [actualSlide, setActualSlide] = useState(0)

  const handleChangeSlide = (n) => {
    let newActualSlide = actualSlide + n
    if (newActualSlide > events.length - 1) {
      newActualSlide = 0
    }
    if (newActualSlide < 0) {
      newActualSlide = events.length - 1
    }
    setActualSlide(newActualSlide)
  }

  const handleChangeSlideByBtn = (n) => {
    const newActualSlide = n
    setActualSlide(newActualSlide)
  }

  const autoChangeSlide = () => {
    handleChangeSlide(1)
  }

  useEffect(() => {
    const interval = setInterval(autoChangeSlide, 5000)
    return () => clearInterval(interval)
  }, [actualSlide])
  
  return (
    <section className='relative flex justify-between my-2'>
      <button
        className='text-white w-fit absolute top-1/2 left-2 z-30 bg-light-primary/50 hover:bg-light-primary dark:bg-dark-primary/50 dark:hover:bg-dark-primary rounded-2xl p-1'
        onClick={() => handleChangeSlide(-1)}
      >
        <LeftArrowIcon className='text-3xl font-bold mr-1' />
      </button>
      <div className={`relative w-full ${little ? 'max-h-64' : 'max-h-96'}`}>
        {
          events.map((e, i) => <SlideEvent href={e.imagen} name={e.nombre_evento} index={i} actualSlide={actualSlide} key={e.id_evento} little={little} />)
        }
        <div className='absolute bottom-2 w-full z-30 flex flex-row justify-center gap-2'>
          {
            events.map((e, i) => {
              return (
                <button
                  key={i}
                  className={`border size-4 rounded-full ${i === actualSlide ? 'bg-light-primary dark:bg-dark-primary' : 'bg-light-primary/50 dark:bg-dark-primary/50'}`}
                  onClick={() => handleChangeSlideByBtn(i)}
                >
                </button>
              )
            })
          }
        </div>
      </div>
      <button
        className='text-white w-fit absolute top-1/2 right-2 z-30 bg-light-primary/50 hover:bg-light-primary dark:bg-dark-primary/50 dark:hover:bg-dark-primary rounded-2xl p-1'
        onClick={() => handleChangeSlide(1)}
      >
        <RightArrowIcon className='text-3xl font-bold ml-1' />
      </button>
    </section>
  )
}
// ${little ? 'max-h-64' : 'max-h-96'}
const SlideEvent = ({href, name, index, actualSlide, little}) => {
  return (
    <div
      className={`relative h-full justify-center ${index === actualSlide ? 'flex' : 'hidden'}`}
    >
      <img 
        src={href} 
        alt={`${name} de fondo`}
        className='rounded-md absolute top-0 blur-md object-fill w-full h-full z-10 p-4'
      />
      <img 
        src={href} 
        alt={name}
        className={`rounded-md relative object-contain ${little ? 'h-64' : 'h-96'} z-20 items-center`}
      />
    </div>
  )
}