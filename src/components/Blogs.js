import React, { useEffect, useState } from 'react';
const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const userAction = async () => {
        const response = await fetch('https://dev.to/api/articles?username=tmayank860', {
          method: 'GET',
        });
        const myJson = await response.json(); //extract JSON from the http response
        // do something with myJson
        console.log("fhhgfh",myJson);
        setBlogs(myJson);
      }
      useEffect(() => {
        userAction();
      }, [])
      
    return (
        <div
          name="blogs"
          className="bg-gradient-to-b from-black to-gray-800 w-full
        text-white md:h-screen"
        >
          <div
            className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
            w-full h-full"
          >
            <div className="pb-4">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                Blogs
              </p>
              <p className="pt-6">Checkout my blogs right here!</p>
            </div>
    
            {/* Project Grid  */}
            <div  className='grid grid-cols-1 md:grid-cols-4 gap-8 px-12 sm:px-0'>
          {blogs.map((blog)=>(
             
              <div key={blog?.id} className='shadow-md rounded-lg relative shadow-purple-900'>
                  <img src={blog.cover_image ? blog?.cover_image : blog?.social_image} alt= 'blog' 
                  className='rounded-md duration-200 hover:scale-105 w-full'/>
                  <p className='text-cyan-400 px-2 py-1'>{blog?.readable_publish_date}</p>
                  <p className='px-2 text-sm pb-10' >{blog?.title}</p>
                  <div className='bg-gradient-to-r from-purple-500 to-purple-600 w-full items-center flex justify-center bottom-0 right-0 absolute'>
                  <a href={blog?.url} rel="noreferrer" className=' px-6 py-1 duration-200 hover:scale-105'>Read More</a>
                  </div>
              </div>
         
          ))}
           </div>
          </div>
        </div>
      );
}

export default Blogs