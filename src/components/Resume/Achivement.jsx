import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"

const Achivement = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="flex flex-col gap-20 lgl:flex-row font-titleFont"
    >
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
          <h2 className="text-2xl font-bold lgl:text-4xl">About Me</h2>
        </div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="As a Family Person"
            subTitle="Belong Brown to Present."
            result="Success"
            des="All the members of the family are highly intimate with me and I am to them too." />
          <ResumeCard
            title="As a Friend"
            subTitle="Belong Brown to Present."
            result="Success"
            des="Always there to lend an ear, share laughter, offer support, and make memories that last a lifetime." />
          <ResumeCard
            title="As a Social Person."
            subTitle="Belong Brown to Present."
            result="Success"
            des="Thriving in connections, fostering inclusivity, spreading positivity, and embracing diverse perspectives for meaningful interactions."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont">
          <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
          <h2 className="text-2xl font-bold lgl:text-4xl">More About Me</h2>
        </div>
        <div className="mt-6 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="As an Employee"
            subTitle="2016 - 2020"
            result="Success"
            des="Diligent, proactive, reliable, and dedicated, consistently delivering high-quality work and contributing to the success of the team."
          />
          <ResumeCard
            title="As a Citizen"
            subTitle="Belong Brown to Present."
            result="Success"
            des="Committed to the community, upholding values, respecting laws, and actively contributing to the betterment of society."/>
          <ResumeCard
            title="As a Teacher"
            subTitle="2021 - 2022"
            result="Success"
            des=" Inspiring minds, fostering curiosity, guiding knowledge, and empowering students to reach their full potential." />
        </div>
      </div>
    </motion.div>
    );
};

export default Achivement;