import React from 'react'
import Design from '../Design/Design'

export default function Contact() {
  return (
    <>
      <div className='bg-white h-174 flex flex-col items-center justify-center '>

        <h2 className='mb-2 text-4xl font-bold  text-[#2c3e50]'>CONTACT SECTION</h2>
        <Design style={{ backgroundColor: '#2c3e50', color: '#2c3e50' }} />

        <div className='form'>
          <form>

            <div className="py-5">
              <input type="text" className="w-2xl rounded py-3 shadow-md text-black px-4 focus:outline-none" id="InputName" placeholder="userName" />
            </div>

            <div className="py-5">
              <input type="number" className="w-2xl rounded py-3 shadow-md text-black px-4 focus:outline-none" id="InputAge" placeholder="userAge" />
            </div>

            <div className="py-5">
              <input type="email" className="w-2xl rounded py-3 shadow-md text-black px-4 focus:outline-none" id="InputEmail" placeholder="userEmail" />
            </div>

            <div className="py-5">
              <input type="password" className="w-2xl rounded py-3 shadow-md text-black px-4 focus:outline-none" id="InputPassword" placeholder="userPassword" />
            </div>

            <button type="button" className=" bg-[#1abc9c] flex py-2 px-2 rounded cursor-pointer text-white">send Message</button>
          </form>

        </div>


      </div>



    </>
  )
}
