import React from 'react'
import { projects } from './Data';
const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full
    text-white md:h-screen"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Checkout some of my work right here! |
            <span className="text-purple-500">
              More Coming soon, till then checkout my &nbsp;
              <a className='border-purple-500 hover:border-b-4 hover:text-2xl duration-500' href="https://github.com/tmayank860"
              rel='noreferrer'>GitHub</a> / 
              <a className='border-purple-500 hover:border-b-4 hover:text-2xl duration-500' href="https://instagram.com/the_cs_guy_"
              rel='noreferrer'> Instagram</a>
            </span>
          </p>
        </div>

        {/* Project Grid  */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {projects.map(({ id, name, src, desc, url1, url2 }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg relative"
            >
              {src !== "" ? (
                <img
                  src={src}
                  alt="project"
                  className="rounded-md duration-200 hover:scale-105"
                />
              ) : null}
              <div className="h-auto pb-20">
                <p className="flex justify-center border-b-4 border-gray-500">
                  {name}
                </p>
                <p className="border-b-4 border-gray-500">{desc}</p>
              </div>

              <div className="flex items-center justify-center absolute w-full bottom-0">
                <button className="w-1/2 px-6 py-2 duration-200 hover:scale-105 bg-gradient-to-r from-purple-500 to-purple-900 border-r border-white">
                  {" "}
                  <a href={url2} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-2 duration-200 hover:scale-105  bg-gradient-to-r from-purple-500 to-purple-900 border-l border-white">
                  <a href={url1} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio