import React from 'react'
import { technologies } from './Data'

const Experience = () => {

  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full
  text-white md:h-screen"
  >
    <div
      className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Experience
        </p>
        <p className="py-6">Tools and Technologies that I used on daily basis!</p>
      </div>

      {/* Project Grid  */}
      <div  className='grid grid-cols-3 md:grid-cols-6 md:gap-8 md:px-12 py-8 px-2  text-center'>
      {technologies.map(({name, url, style})=>(
         
         <div key={name} className={'shadow-md shadow-gray-600 py-2 rounded-lg '+ style}>
             <img src={url} alt= {`${name} logo`} 
             className='h-24 mx-auto' />
             <div className='mt-4'>
            <p>{name}</p>
             </div>
         </div>
    
     ))}
     </div>
    </div>
  </div>
  )
}

export default Experience