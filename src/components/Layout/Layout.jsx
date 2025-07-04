
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
     
      <div className='header fixed top-0 w-full z-5 p-9 bg-[#2c3e50]'>
        <div className="flex justify-between items-center px-20">

          <Link to="/" className="text-white font-bold text-3xl no-underline">
            <h1 className="m-0">START FRAMEWORK</h1>
          </Link>

        
          <ul className="flex gap-6 text-white font-bold text-1xl">
            <li>
              <Link className="focus:bg-[#1abc9c] p-2 rounded" to="/about">ABOUT</Link>
            </li>
            <li>
              <Link className="focus:bg-[#1abc9c] p-2 rounded" to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link className="focus:bg-[#1abc9c] p-2 rounded" to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="main mt-40"> 
        <Outlet />
      </div>

      <div className='info bg-[#2c3e50] text-white flex justify-evenly items-center py-28 px-10'>
        <div>
          <h3 className='font-semibold text-2xl pb-2'>LOCATION</h3>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>

        <div>
          <h3 className='font-semibold text-2xl pb-2'>AROUND THE WEB</h3>
          <ul className='flex justify-center gap-3'>
            <li><i className="fa-brands fa-facebook border-2 border-white rounded-full p-2"></i></li>
            <li><i className="fa-brands fa-twitter border-2 border-white rounded-full p-2"></i></li>
            <li><i className="fa-brands fa-linkedin-in border-2 border-white rounded-full p-2"></i></li>
            <li><i className="fa-solid fa-globe border-2 border-white rounded-full p-2"></i></li>
          </ul>
        </div>

        <div>
          <h3 className='font-semibold text-2xl pb-1'>ABOUT FREELANCER</h3>
          <p className='w-105'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>


      <div className='footer text-white py-5.5 bg-[#1a252f] text-center'>
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  )
}
