import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion"

const Education = () => {
    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}} className="flex flex-col gap-20 lgl:flex-row">
            <div>
                <div className="py-12">
                    <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
                    <h2 className="text-2xl font-bold lgl:text-4xl">Education Quality</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc in Computer Science"
                        subTitle="Northern University Bangladesh (NUB) (Present)"
                        result="Up Coming"
                        des="NUB's Computer Science: Where minds unite, coding ignites, and technology takes flight. Proud to be part of this journey!"
                    />
                    <ResumeCard
                        title="Diploma in Computer Science"
                        subTitle="Model Institute of Science & Technology (2016 - 2020)"
                        result="3.56/4"
                        des="MIST 2020 Computer Science diploma holder, equipped with skills to excel in the tech world, ready to innovate and contribute."
                    />
                    <ResumeCard
                        title="Secondary School Certificate"
                        subTitle="Hatem Tai High School (2010 - 2016) in Science Group"
                        result="4.88/5"
                        des="Hatem Tai High School, SSC 2016 Science graduate, laying the foundation for a bright academic journey in the sciences."
                    />
                </div>
            </div>
            <div>
                <div className="py-12">
                    <p className="text-sm text-designColor tracking-[4px]">2000 - 2023</p>
                    <h2 className="text-2xl font-bold lgl:text-4xl">Completed Course</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="Complete Web Development Course"
                        subTitle="Programming Hero  (2021 - Present)"
                        result="5 Star"
                        des="Successfully completed this course, gaining expertise in front-end, back-end, & creating dynamic, interactive websites for the digital world."
                    />
                    <ResumeCard
                        title="Quantum Method"
                        subTitle="Improve My Attitude by Meditation (2020 - Present)"
                        result="Bangladesh"
                        des="Cultivating inner peace, mindfulness, & stress-relief techniques for a harmonious and balanced life. Serenity achieved!"
                    />
                    <ResumeCard
                        title="English Language Club"
                        subTitle="Dhaka English Language Club (2018 - Present)"
                        result="Bangladesh"
                        des="English course conquered: Fluent in language, skilled communicator, ready for international connections and exciting prospects."
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Education;