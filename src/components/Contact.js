import React from 'react'

const Contact = () => {
  return (
    <div
    name="contact"
    className="bg-gradient-to-b from-black to-gray-800 mx-auto w-full
  text-white p-4 md:h-screen"
  >
    <div
      className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
      w-full h-full"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact
        </p>
        <p className="py-6">Submit the form to get in touch with me!</p>
      </div>
      <div className='flex justify-center items-center'>
        <form action="https://getform.io/f/800e66e5-2f89-40b1-87c0-010c23c6c1dc" method='post' className='flex flex-col w-full md:w-1/2'>
            <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus: outline-none my-2'
            />
            <input
            type='email'
            name='emal'
            placeholder='Enter Your Email'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus: outline-none my-2'
            />
            <textarea
            rows='10'
            name='message'
            placeholder='Enter Your Message'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus: outline-none my-2'
            />
            <button className='text-white bg-gradient-to-r 
              from-purple-500 to-purple-900 px-6 py-2 my-8 mx-auto flex items-center
            rounded-md hover:scale-105 duration-300'>
                Let's Connect
            </button>

        </form>
      </div>

    </div>
  </div>
  )
}

export default Contact