import React from 'react'
import Design from '../Design/Design'


export default function About() {
  return (
    <>

      <div className='about text-white h-170 flex-col items-center justify-center bg-[#1abc9c] pt-70' >

        <h2 className='text-4xl font-bold' >ABOUT COMPONENT</h2>

        <Design style={{ backgroundColor: '#ffffff', color: '#ffffff' }} />



        <div className='content flex w-287 text-start mb-5 mx-auto gap-5'>
          <p className=''>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

      </div>


    </>


  )
}
