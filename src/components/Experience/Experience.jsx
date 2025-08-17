import React from "react";
import { experiences } from "../../constants.js"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans 
      bg-light-grid dark:bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-400">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gray-300 dark:bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Content Section */}
            <div
              className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border 
              border-gray-300 dark:border-white 
              bg-white dark:bg-gray-900 backdrop-blur-md 
              shadow-[0_0_20px_1px_rgba(130,69,236,0.2)] 
              transform transition-transform duration-300 hover:scale-105
              ${index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"} sm:ml-44 sm:mr-44 ml-8`}
            >
              {/* Flex container for image and text */}
              <div className="flex items-center space-x-6">
                {/* Company Logo/Image */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 dark:bg-white rounded-full flex justify-center items-center shadow-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>

                {/* Role, Company Name, and Date */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white leading-snug">
                    {experience.role}
                  </h3>
                  <h4 className="text-md sm:text-base text-gray-700 dark:text-gray-300 mt-1">
                    {experience.company}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-700 dark:text-gray-400">{experience.desc}</p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-gray-900 dark:text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className="bg-purple-100 dark:bg-[#8245ec] 
                      text-gray-800 dark:text-gray-300 
                      px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 
                      border border-gray-300 dark:border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
