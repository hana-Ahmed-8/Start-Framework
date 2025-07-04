import React from 'react'
import Design from '../Design/Design'


export default function Welcome() {
    return (
        <>


            <div className='text-white h-screen flex flex-col items-center justify-center bg-[#1abc9c] pt-40'>


                <div className=' w-60'>
                    <img src="/avataaars.svg" alt="Avatar" className='rounded-5' />
                </div>


                <h2 className='text-4xl font-bold pt-10 pb-3 '> START FRAMEWORK</h2>
                <Design style={{ backgroundColor: '#ffffff', color: '#ffffff' }} />
                <p>Graphic Artist - Web Designer - Illustrator</p>

            </div>

        </>
    )
}
