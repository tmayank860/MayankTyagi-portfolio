import React from "react";
import HeroImage from "../assets/hero.jpg";
import { RiArrowRightDownLine } from "react-icons/ri";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen sm:min-h-full w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto 
        flex flex-col items-center justify-center 
        h-full px-4 md:flex-row"
      >
        <div className="flex flex-1 flex-col justify-center h-full mt-8">
          <h2 className="sd:text-6xl text-4xl font-bold pt-20 text-purple-500">
            Hi! I am Mayank Tyagi, a Software Developer by profession and 
            content creator by 💗 
          </h2>
          <p className="text-gray-400 py-4 max-w-md md:max-w-lg">
            I'm a Full Stack Developer with 3 years of experience in the IT industry. 
            With 2 years of experience in front-end development, I have honed my skills 
            in React JS, React Native, and GraphQL. My ability to design and develop 
            responsive user interfaces has helped me build scalable and robust software 
            applications.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r 
              from-purple-500 to-purple-900 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-45 duration-300">
                <RiArrowRightDownLine className="ml-1" size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="flex flex-1">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-0.65"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
