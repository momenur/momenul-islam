import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col gap-10 lgl:flex-row lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 ">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-2xl font-bold lgl:text-4xl">Frontend Skill</h2>
        </div>
        <div className="flex flex-col w-full gap-6 mt-6 lg:mt-6">
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">NEXT.JS</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[80%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">80%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">REACT.JS</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">90%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">TYPE SCRIPT</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">JAVA SCRIPT</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[92%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">92%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">TAILWIND CSS</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[95%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">95%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">BOOTSTRAP</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[92%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">92%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 ">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-2xl font-bold lgl:text-4xl">Backend Skill</h2>
        </div>

        {/* DEVELOPMENT SKILLS */}

        <div className="flex flex-col w-full gap-6 mt-6 lg:mt-6">
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">EXPRESS JS</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[65%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">65%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">node. js</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[75%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">75%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">Mongoes</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[60%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">60%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">mongo db</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[70%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">70%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">firebase</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[85%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">85%</span>
              </motion.span>
            </span>
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-medium uppercase">ux/ui</p>
            <span className="inline-flex w-full h-2 mt-1 rounded bgOpacity">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative w-[90%] h-full rounded bg-gradient-to-r from-blue-600 via-pink-500 to-red-500"
              >
                <span className="absolute right-0 text-sm -top-6">90%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
