import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] h-[550px] md:w-[600px] xl:w-[900px] xl:h-[700px] xl:mt-20
    snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-top"
        src={urlFor(experience?.companyImage).url()}
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img 
              key={technology._id} 
              src={urlFor(technology.image).url()} 
              className='h-10 w-10 rounded-full'
              />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          {`${new Date(experience.dateStarted).getDate()}/${new Date(experience.dateStarted).getMonth() + 1}/${new Date(experience.dateStarted).getFullYear()}`}- {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
            
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
