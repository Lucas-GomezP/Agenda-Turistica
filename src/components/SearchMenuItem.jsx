export const SearchMenuItem = ({children, href, showMenu}) => {
  return (
    <li className='p-2'>
      <a 
        href={href} 
        className='flex items-center justify-center rounded-md gap-2 text-xl font-bold bg-light-background dark:bg-dark-background p-2 hover:bg-light-primary text-light-text dark:text-dark-text dark:hover:bg-dark-primary transition-color duration-200' 
        onClick={showMenu}
      >
        {children}
      </a>
    </li>
  )
}