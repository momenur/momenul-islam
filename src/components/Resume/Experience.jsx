import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"

const Experience = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="flex flex-col gap-20 lgl:flex-row font-titleFont"
    >
      <div>
        <div className="py-12">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-2xl font-bold lgl:text-4xl">Job Experience</h2>
        </div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Junior Instructor"
            subTitle="Model Institute of Science & Technology  (2021 - 2022)"
            result="GAZIPUR"
            des="As a teacher, inspiring minds, fostering tech knowledge, shaping future innovators. Empowering the next generation of tech enthusiasts."
          />
          <ResumeCard
            title="IT Support Engineer"
            subTitle="Marico Bangladesh LTD (2016 - 2000)"
            result="DHAKA"
            des="This job give a big opportunity to improve my communication skill. and this is the my first job"
          />
          <ResumeCard
            title="Web Development Trainer"
            subTitle="Model Institute of Science & Technology (2 Months)"
            result="GAZIPUR
            "
            des="Nurturing coding talents, crafting web wizards, empowering learners to build online wonders. Inspiring growth!"
          />
        </div>
      </div>
      <div>
        <div className="py-12">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2023</p>
          <h2 className="text-2xl font-bold lgl:text-4xl">Other Experience</h2>
        </div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Development"
            subTitle="Continue Give Afford (2018 - 2023)"
            result="DHAKA"
            des="Crafting digital experiences, coding creativity, weaving functionality and design into captivating online landscapes."
          />
          <ResumeCard
            title="Completed Project"
            subTitle="Dhaka Gulsan Badda (2018 - 2023)"
            result="DHAKA"
            des="I completed more then 20 project, Some Project of Them Show in Project Section."
          />
          <ResumeCard
            title="Event Management"
            subTitle="Model Institute of Science & Technology (2006 - 2020)"
            result="GAZIPU"
            des="More then 5 Academic Event successfully completed and it was awesome and exciting."
          />
        </div>
      </div>
    </motion.div>
    );
};

export default Experience;