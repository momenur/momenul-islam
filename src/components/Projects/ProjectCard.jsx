import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe, FaServer } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

const ProjectCard = ({ project }) => {
  const [data, setData] = useState(null);

  const handleModal = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/v1/projects/${id}`
      );
      const projectData = await response.json();
      setData(projectData);
      document.getElementById(`modal-${id}`).showModal(); // Show the specific modal after setting the data
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 "
      data-aos="zoom-in"
    >
      <div>
        <div>
          <img
            className="object-cover w-full h-[180px] duration-300 rounded-lg cursor-pointer group-hover:scale-110"
            src={project.photo}
            alt={project.projectName}
          />
        </div>
        <div className="flex flex-col w-full gap-5 mt-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-normal uppercase text-designColor">
              {project.projectName}
            </h2>
            <div className="flex gap-3">
              {project.serverLink && (
                <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                  <a href={project.serverLink}>
                    <FaServer />
                  </a>
                </span>
              )}
              <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                <a href={project.clientLink}>
                  <BsGithub />
                </a>
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                <a href={project.liveLink}>
                  <FaGlobe />
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm tracking-wide duration-300 hover:text-white">
            <h1 className="pb-2 text-xl font-semibold">Technology</h1>
            <div className="flex items-center justify-between">
              <div className="grid w-full grid-cols-2 justify-items-start">
                {project.technologyArr.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </div>
              <button onClick={() => handleModal(project._id)}>
                <div className="flex items-center justify-center px-4 py-2 text-xl font-medium bg-black bg-opacity-25 rounded-lg text-designColor shadow-shadowOne">
                  <HiArrowRight />
                </div>
              </button>
            </div>
          </p>
        </div>
      </div>

      {/* Modal */}
      <dialog
        id={`modal-${project._id}`}
        className="text-black modal modal-bottom sm:modal-middle"
      >
        <div className="bg-gray-100 shadow-2xl modal-box">
          {/* Modal Card Data Start */}

          <div>
            <img
              className="object-cover w-full duration-300 rounded-md"
              src={data?.photo}
              alt={data?.projectName}
            />
          </div>
          <div className="flex flex-col w-full gap-5 mt-5">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-black uppercase">
                {data?.projectName}
              </h2>
              <div className="flex gap-3">
                {data?.serverLink && (
                  <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                    <a href={data?.serverLink}>
                      <FaServer />
                    </a>
                  </span>
                )}
                <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                  <a href={data?.clientLink}>
                    <BsGithub />
                  </a>
                </span>
                <span className="inline-flex items-center justify-center w-10 h-10 text-lg text-gray-400 duration-300 bg-black rounded-full cursor-pointer hover:text-designColor">
                  <a href={data?.liveLink}>
                    <FaGlobe />
                  </a>
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wide duration-300 hover:text-white">
              <h1 className="pb-2 text-xl font-semibold text-gray-700">
                Technology
              </h1>
              <div className="flex items-center justify-between">
                <div className="grid w-full grid-cols-2 text-gray-600 justify-items-start">
                  {data?.technologyArr.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </div>
              </div>
              <div className="mt-6 text-black">
                <h1 className="pb-2 font-semibold text-md">Description</h1>
                <span>{data?.detail}</span>
              </div>
            </p>
          </div>
          {/* Modal Card Data End */}

          <div className="modal-action">
            <form method="dialog">
              <button className="text-white transition-all bg-gray-600 hover:bg-gray-800 btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ProjectCard;
