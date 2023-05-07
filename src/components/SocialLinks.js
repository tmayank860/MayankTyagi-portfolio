import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import {BsFillPersonLinesFill} from 'react-icons/bs'
 
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>LinkedIn <FaLinkedin size={30}/> </>
            ),
            href : 'https://linkedin.com/in/tmayank860',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>YouTube <FaYoutube size={30}/> </>
            ),
            href : 'https://youtube.com/@MayankTyagi',
        },
        {
            id: 3,
            child: (
                <>GitHub <FaGithub size={30}/> </>
            ),
            href : 'https://github.com/tmayank860',
        },
        {
            id: 4,
            child: (
                <>Instagram <FaInstagram size={30}/> </>
            ),
            href : 'https://instagram.com/the_cs_guy_',
        },
        {
            id: 5,
            child: (
                <>Mail <MdMailOutline size={30}/> </>
            ),
            href : 'mailto://linkedin.com/in/tmayank860',
        },
        {
            id: 6,
            child: (
                <>Resume <BsFillPersonLinesFill size={30}/> </>
            ),
            href : '/MayankTyagiResume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed'>
       <ul>
       {links.map(({id, child, href, style, download })=>(
         <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' + style}>
             <a
              className='flex justify-between items-center w-full text-white'
              href={href}
              download={download}
              rel='noreferrer'
              >
                 {child}
             </a>
         </li>
       ))}
        </ul> 
    </div>
  )
}

export default SocialLinks