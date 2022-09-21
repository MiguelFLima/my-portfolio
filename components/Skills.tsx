import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

function Skills({skills}: Props) {
  return (
    <motion.div 
        initial={{opacity: 0,}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        className="flex relative flex-col text-center md:text-left xl:text-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm text-gray-500">
        Hover over a skill for current proficiency
      </h3>
      <div className="grid mt-24 grid-cols-3 gap-4 xl:grid-cols-4">
        {skills?.slice(0, skills.length / 2 ).map(skill => (
          
          <Skill skill={skill} key={skill._id} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map(skill => (
          
          <Skill skill={skill} key={skill._id}  directionLeft/>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
