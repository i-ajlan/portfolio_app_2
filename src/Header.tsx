import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import profileImg from './img/profilePicture.png'

const Header = () => {

    useEffect(()=>{
        const headerButton = document.getElementById('headerButton') as HTMLElement;
        const header_nav = document.getElementById('header_nav') as HTMLElement;

        const handleClick = ()=>{
            header_nav.classList.toggle('invisible')
            header_nav.classList.toggle('nav-full-screen')
            header_nav.classList.toggle('animate-dropping-nav-anim')
            console.log(header_nav.classList)
            console.log('I got clicked!')
        }

        headerButton.addEventListener('click', handleClick)


        return () => headerButton.removeEventListener('click', handleClick)
    },[])

  return (
    <header className=" text-xl flex justify-center bg-white dark:bg-black dark:text-white">
        <section className=" flex flex-1 justify-between max-w-4xl p-4">
            <div className='flex gap-2'>
            <h1 className='text-2xl sm:text-4xl'>PortFolio</h1>
            <figure className='invisible relative w-10 h-10 bg-white rounded-full'>
                <img className='h-full w-full object-cover' src={profileImg} alt="" />
            </figure>
            </div>
            <div>

            <nav id='header_nav' className='origin-top invisible sm:visible h-full'>
                <ul  className='flex gap-2 content-stretch h-full'>
                    <li className=' hover:bg-slate-400 focus:bg-slate-400 px-4 hover:border-white focus:border-white hover:border-4 focus:border-4 rounded-2xl'><NavLink to="/">welcome</NavLink></li>
                    <li className=' hover:bg-slate-400 focus:bg-slate-400 px-4 hover:border-white focus:border-white hover:border-4 focus:border-4 rounded-2xl'><NavLink to="/about_me">about me</NavLink></li>
                    <li className=' hover:bg-slate-400 focus:bg-slate-400 px-4 hover:border-white focus:border-white hover:border-4 focus:border-4 rounded-2xl'><NavLink to="my_projects">my projects</NavLink></li>
                </ul>
            </nav>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" id='headerButton'  className="w-6 h-6 stroke-black stroke- dark:stroke-white stroke-[3.5px] sm:hidden">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </section>
    </header>
  )
}

export default Header
