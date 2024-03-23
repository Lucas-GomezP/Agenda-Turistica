import { EntertainmentIcon, SeminarIcon, FairIcon, TalkIcon, SportIcon, ArtIcon } from '../Icons/TypeEventsIcons'

export const TypeEvent = ({id}) => {
  switch (id) {
    case 1:
      return <EntertainmentIcon className='text-green-500' />
    case 2:
      return <SeminarIcon className='text-red-500' />
    case 3:
      return <FairIcon className='text-blue-500' />
    case 4:
      return <TalkIcon className='text-pink-500' />
    case 5:
      return <SportIcon className='text-yellow-500' />
    case 6:
      return <ArtIcon className='text-purple-500' />
  }
}