import React from 'react'

export default function Design(props ) {
 const { backgroundColor, color } = props.style;  
  return (
   <>

   <div className='design mb-4'>

          <div className='line relative'> 
              <span className='right absolute' style={{backgroundColor}}></span>
              <i className="fa-solid fa-star" style={{color}}></i>
              <span className='left absolute' style={{backgroundColor}}></span>
          </div>

        </div>

   
   
   </>
  )
}
