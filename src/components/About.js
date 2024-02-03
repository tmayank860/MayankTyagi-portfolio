import moment from "moment";
import React, { useEffect, useState } from "react";

const About = () => {

  const [experienceInYear, setexperienceInYear] = useState(2);
  useEffect(() => {
    const startDate = moment('2020-11-01');
  
    // Current date
    const currentDate = moment();
  
    // Calculate the difference in years
    const yearsDifference = currentDate.diff(startDate, 'years');
    setexperienceInYear(yearsDifference);

  }, [])
  
  return (
    <div
      name="about"
      className="w-full h-screen 
    bg-gradient-to-b from-gray-800 
    to to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
       w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline 
            border-b-4 border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-20">
         {` With ${experienceInYear}+ years of experience in building and designing software, I
          specialize in front-end development and work with cutting-edge
          technologies like React JS, React Native, GraphQL, JSON, RestAPIs, and
          Tailwind.`}
        </p>
        <br/>
        <p className="text-xl">
          {`As an experienced Full Stack Developer, I have ${experienceInYear}+ years of experience
          in designing and implementing multiple UIs using React, Native-Base,
          and Styled Components. I have also developed micro frontends from
          scratch and trained and mentored new team members.`}
        </p>
        <br />
        
        {/* <p className="text-xl">
          During my tenure as a Digital Specialist Engineer at Infosys, I have
          worked on both frontend and backend technologies, executed unit tests,
          and participated in code reviews and project meetings to ensure
          high-quality and performant software applications. My projects include
          creating a mobile application for an E-commerce client, an inventory
          management system for a prominent cosmetic industry client, and an
          E-commerce mobile application with 2+ million customers in the USA. My
          expertise in React JS, React Native, Redux, Realm, and GraphQL has
          helped me deliver solutions aligned with project requirements.
        </p> */}
        
      </div>
    </div>
  );
};

export default About;
