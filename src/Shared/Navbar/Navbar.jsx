import Container from '../Container'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { FaBriefcaseMedical } from "react-icons/fa";



const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=' w-full  fixed z-10 text-black  bg-slate-200 opacity-40 max-w-screen-xl mx-auto'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link className='flex gap-3 p-2 items-center font-bold text-xl' to='/'>
              <FaBriefcaseMedical ></FaBriefcaseMedical>  <p > Doc service</p>

            </Link>
            {/* Dropdown Menu */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                {/* Become A Host btn */}

                {/* Dropdown btn */}
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  {/* <AiOutlineMenu /> */}
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src=''
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div>
              </div>
              {isOpen && (
                <div className='absolute  rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer font-bold text-xl'>
                    <Link
                      to='/'
                      className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                    >
                      Home
                    </Link>

                    {user ? (
                      <>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>
                      </>
                    ) : (
                      <>
                        <Link
                          to='/'
                          className='block  px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Home
                        </Link>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                        <Link
                          to='/appointment'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Appointment
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
