import menu from '../assets/images/icon-menu.svg'
export const NavBar = () => {
  return (
   <>
    <ul className=" hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
      <li><a href="#">Home</a></li>
      <li><a href="#">Popular</a></li>
      <li><a href="#">Trending</a></li>
      <li><a href="#">Categories</a></li>
    </ul>
    <img src={menu} alt="menu burger" className='w-10 cursor-pointer sm:hidden' />
   </>
  )
}

